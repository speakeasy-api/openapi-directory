import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the thread scaling recommendation for a worker from the backend.
 */
export declare class WorkerThreadScalingReportResponse extends SpeakeasyBase {
    /**
     * Recommended number of threads for a worker.
     */
    recommendedThreadCount?: number;
}
