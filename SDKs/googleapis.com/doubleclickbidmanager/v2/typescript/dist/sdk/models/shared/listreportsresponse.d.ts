import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Successful response
 */
export declare class ListReportsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as page_token to retrieve the next page of reports. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Retrieved reports.
     */
    reports?: Report[];
}
