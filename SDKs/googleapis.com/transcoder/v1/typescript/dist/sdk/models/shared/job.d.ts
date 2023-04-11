import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
import { Status } from "./status";
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
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
     */
    inputUri?: string;
    /**
     * The labels associated with this job. You can use these to organize and group your jobs.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`
     */
    name?: string;
    /**
     * Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
     */
    outputUri?: string;
    /**
     * Output only. The time the transcoding started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the job.
     */
    state?: JobStateEnum;
    /**
     * Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`
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
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
     */
    inputUri?: string;
    /**
     * The labels associated with this job. You can use these to organize and group your jobs.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`
     */
    name?: string;
    /**
     * Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).
     */
    outputUri?: string;
    /**
     * Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`
     */
    templateId?: string;
    /**
     * Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
     */
    ttlAfterCompletionDays?: number;
}
