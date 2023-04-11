import { SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportRequest } from "./runpivotreportrequest";
/**
 * The batch request containing multiple pivot report requests.
 */
export declare class BatchRunPivotReportsRequest extends SpeakeasyBase {
    /**
     * Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests.
     */
    requests?: RunPivotReportRequest[];
}
