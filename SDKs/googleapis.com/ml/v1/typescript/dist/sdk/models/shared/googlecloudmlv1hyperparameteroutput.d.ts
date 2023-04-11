import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";
/**
 * Output only. The detailed state of the trial.
 */
export declare enum GoogleCloudMlV1HyperparameterOutputStateEnum {
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
 * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
 */
export declare class GoogleCloudMlV1HyperparameterOutput extends SpeakeasyBase {
    /**
     * All recorded object metrics for this trial. This field is not currently populated.
     */
    allMetrics?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[];
    /**
     * Represents output related to a built-in algorithm Job.
     */
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    /**
     * Output only. End time for the trial.
     */
    endTime?: string;
    /**
     * An observed value of a metric.
     */
    finalMetric?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric;
    /**
     * The hyperparameters given to this trial.
     */
    hyperparameters?: Record<string, string>;
    /**
     * True if the trial is stopped early.
     */
    isTrialStoppedEarly?: boolean;
    /**
     * Output only. Start time for the trial.
     */
    startTime?: string;
    /**
     * Output only. The detailed state of the trial.
     */
    state?: GoogleCloudMlV1HyperparameterOutputStateEnum;
    /**
     * The trial id for these results.
     */
    trialId?: string;
    /**
     * URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a hyperparameter tuning job and the job's training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell.
     */
    webAccessUris?: Record<string, string>;
}
