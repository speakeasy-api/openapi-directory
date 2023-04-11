import { SpeakeasyBase } from "../../../internal/utils";
import { RunReportResponse } from "./runreportresponse";
/**
 * The batch response containing multiple reports.
 */
export declare class BatchRunReportsResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON.
     */
    kind?: string;
    /**
     * Individual responses. Each response has a separate report request.
     */
    reports?: RunReportResponse[];
}
