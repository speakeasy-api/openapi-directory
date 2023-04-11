import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";
/**
 * Status of the task execution (e.g. Jobs).
 */
export declare class GoogleCloudDataplexV1TaskExecutionStatus extends SpeakeasyBase {
    /**
     * A job represents an instance of a task.
     */
    latestJob?: GoogleCloudDataplexV1Job;
    /**
     * Output only. Last update time of the status.
     */
    updateTime?: string;
}
