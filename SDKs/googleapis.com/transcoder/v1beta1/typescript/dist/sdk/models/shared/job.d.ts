import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetail } from "./failuredetail";
import { JobConfig } from "./jobconfig";
import { OriginUri } from "./originuri";
import { Progress } from "./progress";
/**
 * Output only. The current state of the job.
 */
export declare enum JobStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Transcoding job resource.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * Job configuration
     */
    config?: JobConfig;
    /**
     * Output only. The time the job was created.
     */
    createTime?: string;
    /**
     * Output only. The time the transcoding finished.
     */
    endTime?: string;
    /**
     * Output only. List of failure details. This property may contain additional information about the failure when `failure_reason` is present. *Note*: This feature is not yet available.
     */
    failureDetails?: FailureDetail[];
    /**
     * Output only. A description of the reason for the failure. This property is always present when `state` is `FAILED`.
     */
    failureReason?: string;
    /**
     * Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`).
     */
    inputUri?: string;
    /**
     * The resource name of the job. Format: `projects/{project}/locations/{location}/jobs/{job}`
     */
    name?: string;
    /**
     * The origin URI.
     */
    originUri?: OriginUri;
    /**
     * Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`.
     */
    outputUri?: string;
    /**
     * Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0.
     */
    priority?: number;
    /**
     * Estimated fractional progress for each step, from `0` to `1`.
     */
    progress?: Progress;
    /**
     * Output only. The time the transcoding started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the job.
     */
    state?: JobStateEnum;
    /**
     * Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`. Preset Transcoder templates: - `preset/{preset_id}` - User defined JobTemplate: `{job_template_id}`
     */
    templateId?: string;
    /**
     * Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
     */
    ttlAfterCompletionDays?: number;
}
/**
 * Transcoding job resource.
 */
export declare class JobInput extends SpeakeasyBase {
    /**
     * Job configuration
     */
    config?: JobConfig;
    /**
     * Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`).
     */
    inputUri?: string;
    /**
     * The resource name of the job. Format: `projects/{project}/locations/{location}/jobs/{job}`
     */
    name?: string;
    /**
     * The origin URI.
     */
    originUri?: OriginUri;
    /**
     * Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`.
     */
    outputUri?: string;
    /**
     * Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0.
     */
    priority?: number;
    /**
     * Estimated fractional progress for each step, from `0` to `1`.
     */
    progress?: Progress;
    /**
     * Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`. Preset Transcoder templates: - `preset/{preset_id}` - User defined JobTemplate: `{job_template_id}`
     */
    templateId?: string;
    /**
     * Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
     */
    ttlAfterCompletionDays?: number;
}
