import { SpeakeasyBase } from "../../../internal/utils";
import { UsageReport } from "./usagereport";
export declare class UsageReportsWarningsData extends SpeakeasyBase {
    /**
     * Key associated with a key-value pair to give detailed information on the warning.
     */
    key?: string;
    /**
     * Value associated with a key-value pair to give detailed information on the warning.
     */
    value?: string;
}
export declare class UsageReportsWarnings extends SpeakeasyBase {
    /**
     * Machine readable code or warning type. The warning code value is `200`.
     */
    code?: string;
    /**
     * Key-value pairs to give detailed information on the warning.
     */
    data?: UsageReportsWarningsData[];
    /**
     * The human readable messages for a warning are: - Data is not available warning - Sorry, data for date yyyy-mm-dd for application "`application name`" is not available. - Partial data is available warning - Data for date yyyy-mm-dd for application "`application name`" is not available right now, please try again after a few hours.
     */
    message?: string;
}
/**
 * Successful response
 */
export declare class UsageReports extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of API resource. For a usage report, the value is `admin#reports#usageReports`.
     */
    kind?: string;
    /**
     * Token to specify next page. A report with multiple pages has a `nextPageToken` property in the response. For your follow-on requests getting all of the report's pages, enter the `nextPageToken` value in the `pageToken` query string.
     */
    nextPageToken?: string;
    /**
     * Various application parameter records.
     */
    usageReports?: UsageReport[];
    /**
     * Warnings, if any.
     */
    warnings?: UsageReportsWarnings[];
}
