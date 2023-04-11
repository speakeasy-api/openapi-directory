import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
 */
export declare class FreshnessOptions extends SpeakeasyBase {
    /**
     * The duration after which an object should be considered stale. The default value is 180 days (in seconds).
     */
    freshnessDuration?: string;
    /**
     * This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time.
     */
    freshnessProperty?: string;
}
