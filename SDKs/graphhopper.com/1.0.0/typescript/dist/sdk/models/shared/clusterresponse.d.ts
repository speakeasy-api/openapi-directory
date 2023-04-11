import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Indicates the current status of the job
 */
export declare enum ClusterResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}
/**
 * A response containing the solution
 */
export declare class ClusterResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    copyrights?: string[];
    processingTime?: number;
    /**
     * Indicates the current status of the job
     */
    status?: ClusterResponseStatusEnum;
    waitingTimeInQueue?: number;
}
