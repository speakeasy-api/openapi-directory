import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerHealthReportResponse } from "./workerhealthreportresponse";
import { WorkerThreadScalingReportResponse } from "./workerthreadscalingreportresponse";
/**
 * A worker_message response allows the server to pass information to the sender.
 */
export declare class WorkerMessageResponse extends SpeakeasyBase {
    /**
     * WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
     */
    workerHealthReportResponse?: WorkerHealthReportResponse;
    /**
     * Service-side response to WorkerMessage reporting resource utilization.
     */
    workerMetricsResponse?: Record<string, any>;
    /**
     * Service-side response to WorkerMessage issuing shutdown notice.
     */
    workerShutdownNoticeResponse?: Record<string, any>;
    /**
     * Contains the thread scaling recommendation for a worker from the backend.
     */
    workerThreadScalingReportResponse?: WorkerThreadScalingReportResponse;
}
