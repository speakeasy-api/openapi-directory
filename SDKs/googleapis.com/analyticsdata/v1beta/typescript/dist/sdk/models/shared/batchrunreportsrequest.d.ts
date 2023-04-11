import { SpeakeasyBase } from "../../../internal/utils";
import { RunReportRequest } from "./runreportrequest";
/**
 * The batch request containing multiple report requests.
 */
export declare class BatchRunReportsRequest extends SpeakeasyBase {
    /**
     * Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests.
     */
    requests?: RunReportRequest[];
}
