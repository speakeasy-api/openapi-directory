import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutput } from "./googlecloudmlv1hyperparameteroutput";
/**
 * Represents results of a training job. Output only.
 */
export declare class GoogleCloudMlV1TrainingOutput extends SpeakeasyBase {
    /**
     * Represents output related to a built-in algorithm Job.
     */
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    /**
     * The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
     */
    completedTrialCount?: string;
    /**
     * The amount of ML units consumed by the job.
     */
    consumedMLUnits?: number;
    /**
     * The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.
     */
    hyperparameterMetricTag?: string;
    /**
     * Whether this job is a built-in Algorithm job.
     */
    isBuiltInAlgorithmJob?: boolean;
    /**
     * Whether this job is a hyperparameter tuning job.
     */
    isHyperparameterTuningJob?: boolean;
    /**
     * Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
     */
    trials?: GoogleCloudMlV1HyperparameterOutput[];
    /**
     * Output only. URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell.
     */
    webAccessUris?: Record<string, string>;
}
/**
 * Represents results of a training job. Output only.
 */
export declare class GoogleCloudMlV1TrainingOutputInput extends SpeakeasyBase {
    /**
     * Represents output related to a built-in algorithm Job.
     */
    builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput;
    /**
     * The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
     */
    completedTrialCount?: string;
    /**
     * The amount of ML units consumed by the job.
     */
    consumedMLUnits?: number;
    /**
     * The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.
     */
    hyperparameterMetricTag?: string;
    /**
     * Whether this job is a built-in Algorithm job.
     */
    isBuiltInAlgorithmJob?: boolean;
    /**
     * Whether this job is a hyperparameter tuning job.
     */
    isHyperparameterTuningJob?: boolean;
    /**
     * Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
     */
    trials?: GoogleCloudMlV1HyperparameterOutput[];
}
