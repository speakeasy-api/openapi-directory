import { SpeakeasyBase } from "../../../internal/utils";
import { FreshnessOptions } from "./freshnessoptions";
import { ObjectDisplayOptions } from "./objectdisplayoptions";
/**
 * The options for an object.
 */
export declare class ObjectOptions extends SpeakeasyBase {
    /**
     * The display options for an object.
     */
    displayOptions?: ObjectDisplayOptions;
    /**
     * Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
     */
    freshnessOptions?: FreshnessOptions;
    /**
     * Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition.
     */
    suggestionFilteringOperators?: string[];
}
