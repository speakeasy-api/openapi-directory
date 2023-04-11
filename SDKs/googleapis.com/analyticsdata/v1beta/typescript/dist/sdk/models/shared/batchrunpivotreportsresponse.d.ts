import { SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportResponse } from "./runpivotreportresponse";
/**
 * The batch response containing multiple pivot reports.
 */
export declare class BatchRunPivotReportsResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON.
     */
    kind?: string;
    /**
     * Individual responses. Each response has a separate pivot report request.
     */
    pivotReports?: RunPivotReportResponse[];
}
