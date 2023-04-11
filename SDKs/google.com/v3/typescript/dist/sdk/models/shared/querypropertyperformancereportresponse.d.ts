import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPerformanceResult } from "./propertyperformanceresult";
/**
 * Response message for PropertyPerformanceReportService.QueryPropertyPerformanceReport.
 */
export declare class QueryPropertyPerformanceReportResponse extends SpeakeasyBase {
    /**
     * Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of results that match the query.
     */
    results?: PropertyPerformanceResult[];
}
