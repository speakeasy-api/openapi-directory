import { SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";
/**
 * Indicates the current status of the job
 */
export declare enum ResponseStatusEnum {
    WaitingInQueue = "waiting_in_queue",
    Processing = "processing",
    Finished = "finished"
}
/**
 * A response containing the solution
 */
export declare class Response extends SpeakeasyBase {
    copyrights?: string[];
    /**
     * Processing time in ms. If job is still waiting in queue, processing_time is 0
     */
    processingTime?: number;
    /**
     * Only available if status field indicates `finished`.
     */
    solution?: Solution;
    /**
     * Indicates the current status of the job
     */
    status?: ResponseStatusEnum;
    /**
     * Waiting time in ms
     */
    waitingTimeInQueue?: number;
}
