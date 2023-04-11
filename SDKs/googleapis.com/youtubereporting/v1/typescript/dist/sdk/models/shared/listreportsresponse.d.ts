import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Response message for ReportingService.ListReports.
 */
export declare class ListReportsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of report types.
     */
    reports?: Report[];
}
