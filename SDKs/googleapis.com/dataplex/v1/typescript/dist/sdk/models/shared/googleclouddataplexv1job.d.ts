import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The underlying service running a job.
 */
export declare enum GoogleCloudDataplexV1JobServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    Dataproc = "DATAPROC"
}
/**
 * Output only. Execution state for the job.
 */
export declare enum GoogleCloudDataplexV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * A job represents an instance of a task.
 */
export declare class GoogleCloudDataplexV1Job extends SpeakeasyBase {
    /**
     * Output only. The time when the job ended.
     */
    endTime?: string;
    /**
     * Output only. Additional information about the current state.
     */
    message?: string;
    /**
     * Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}.
     */
    name?: string;
    /**
     * Output only. The number of times the job has been retried (excluding the initial attempt).
     */
    retryCount?: number;
    /**
     * Output only. The underlying service running a job.
     */
    service?: GoogleCloudDataplexV1JobServiceEnum;
    /**
     * Output only. The full resource name for the job run under a particular service.
     */
    serviceJob?: string;
    /**
     * Output only. The time when the job was started.
     */
    startTime?: string;
    /**
     * Output only. Execution state for the job.
     */
    state?: GoogleCloudDataplexV1JobStateEnum;
    /**
     * Output only. System generated globally unique ID for the job.
     */
    uid?: string;
}
