import { SpeakeasyBase } from "../../../internal/utils";
import { ReportType } from "./reporttype";
/**
 * Response message for ReportingService.ListReportTypes.
 */
export declare class ListReportTypesResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of report types.
     */
    reportTypes?: ReportType[];
}
