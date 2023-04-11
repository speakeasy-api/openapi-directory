import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMetrics } from "./evaluationmetrics";
import { TrainingOptions } from "./trainingoptions";
/**
 * The status of the trial.
 */
export declare enum HparamTuningTrialStatusEnum {
    TrialStatusUnspecified = "TRIAL_STATUS_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Infeasible = "INFEASIBLE",
    StoppedEarly = "STOPPED_EARLY"
}
/**
 * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
 */
export declare class HparamTuningTrial extends SpeakeasyBase {
    /**
     * Ending time of the trial.
     */
    endTimeMs?: string;
    /**
     * Error message for FAILED and INFEASIBLE trial.
     */
    errorMessage?: string;
    /**
     * Loss computed on the eval data at the end of trial.
     */
    evalLoss?: number;
    /**
     * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
     */
    evaluationMetrics?: EvaluationMetrics;
    /**
     * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
     */
    hparamTuningEvaluationMetrics?: EvaluationMetrics;
    /**
     * Options used in model training.
     */
    hparams?: TrainingOptions;
    /**
     * Starting time of the trial.
     */
    startTimeMs?: string;
    /**
     * The status of the trial.
     */
    status?: HparamTuningTrialStatusEnum;
    /**
     * Loss computed on the training data at the end of trial.
     */
    trainingLoss?: number;
    /**
     * 1-based index of the trial.
     */
    trialId?: string;
}
