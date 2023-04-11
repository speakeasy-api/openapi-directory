import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1PredictionInput } from "./googlecloudmlv1predictioninput";
import { GoogleCloudMlV1PredictionOutput } from "./googlecloudmlv1predictionoutput";
import { GoogleCloudMlV1TrainingInput } from "./googlecloudmlv1traininginput";
import { GoogleCloudMlV1TrainingOutput, GoogleCloudMlV1TrainingOutputInput } from "./googlecloudmlv1trainingoutput";
/**
 * Output only. The detailed state of a job.
 */
export declare enum GoogleCloudMlV1JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Preparing = "PREPARING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED"
}
/**
 * Represents a training or prediction job.
 */
export declare class GoogleCloudMlV1Job extends SpeakeasyBase {
    /**
     * Output only. When the job was created.
     */
    createTime?: string;
    /**
     * Output only. When the job processing was completed.
     */
    endTime?: string;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
     */
    etag?: string;
    /**
     * Required. The user-specified id of the job.
     */
    jobId?: string;
    /**
     * Output only. It's only effect when the job is in QUEUED state. If it's positive, it indicates the job's position in the job scheduler. It's 0 when the job is already scheduled.
     */
    jobPosition?: string;
    /**
     * Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
     */
    labels?: Record<string, string>;
    /**
     * Represents input parameters for a prediction job.
     */
    predictionInput?: GoogleCloudMlV1PredictionInput;
    /**
     * Represents results of a prediction job.
     */
    predictionOutput?: GoogleCloudMlV1PredictionOutput;
    /**
     * Output only. When the job processing was started.
     */
    startTime?: string;
    /**
     * Output only. The detailed state of a job.
     */
    state?: GoogleCloudMlV1JobStateEnum;
    /**
     * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
     */
    trainingInput?: GoogleCloudMlV1TrainingInput;
    /**
     * Represents results of a training job. Output only.
     */
    trainingOutput?: GoogleCloudMlV1TrainingOutput;
}
/**
 * Represents a training or prediction job.
 */
export declare class GoogleCloudMlV1JobInput extends SpeakeasyBase {
    /**
     * Output only. When the job was created.
     */
    createTime?: string;
    /**
     * Output only. When the job processing was completed.
     */
    endTime?: string;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
     */
    etag?: string;
    /**
     * Required. The user-specified id of the job.
     */
    jobId?: string;
    /**
     * Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.
     */
    labels?: Record<string, string>;
    /**
     * Represents input parameters for a prediction job.
     */
    predictionInput?: GoogleCloudMlV1PredictionInput;
    /**
     * Represents results of a prediction job.
     */
    predictionOutput?: GoogleCloudMlV1PredictionOutput;
    /**
     * Output only. When the job processing was started.
     */
    startTime?: string;
    /**
     * Output only. The detailed state of a job.
     */
    state?: GoogleCloudMlV1JobStateEnum;
    /**
     * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
     */
    trainingInput?: GoogleCloudMlV1TrainingInput;
    /**
     * Represents results of a training job. Output only.
     */
    trainingOutput?: GoogleCloudMlV1TrainingOutputInput;
}
