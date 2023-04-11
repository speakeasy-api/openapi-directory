import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
 */
export declare class PublisherAccount extends SpeakeasyBase {
    /**
     * Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.
     */
    currencyCode?: string;
    /**
     * Resource name of this account. Format is accounts/{publisher_id}.
     */
    name?: string;
    /**
     * The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).
     */
    publisherId?: string;
    /**
     * The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".
     */
    reportingTimeZone?: string;
}
