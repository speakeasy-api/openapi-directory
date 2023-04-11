import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBookingLinksResult } from "./freebookinglinksresult";
/**
 * **DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport.
 */
export declare class QueryFreeBookingLinksReportResponse extends SpeakeasyBase {
    /**
     * Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of results that match the query.
     */
    results?: FreeBookingLinksResult[];
}
