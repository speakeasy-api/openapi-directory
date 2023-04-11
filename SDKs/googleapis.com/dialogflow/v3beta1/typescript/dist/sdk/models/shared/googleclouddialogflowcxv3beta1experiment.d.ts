import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentDefinition } from "./googleclouddialogflowcxv3beta1experimentdefinition";
import { GoogleCloudDialogflowCxV3beta1ExperimentResult } from "./googleclouddialogflowcxv3beta1experimentresult";
import { GoogleCloudDialogflowCxV3beta1RolloutConfig } from "./googleclouddialogflowcxv3beta1rolloutconfig";
import { GoogleCloudDialogflowCxV3beta1RolloutState } from "./googleclouddialogflowcxv3beta1rolloutstate";
import { GoogleCloudDialogflowCxV3beta1VariantsHistory } from "./googleclouddialogflowcxv3beta1variantshistory";
/**
 * The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT->RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT->DONE or RUNNING->DONE.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Running = "RUNNING",
    Done = "DONE",
    RolloutFailed = "ROLLOUT_FAILED"
}
/**
 * Represents an experiment in an environment.
 */
export declare class GoogleCloudDialogflowCxV3beta1Experiment extends SpeakeasyBase {
    /**
     * Creation time of this experiment.
     */
    createTime?: string;
    /**
     * Definition of the experiment.
     */
    definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
    /**
     * The human-readable description of the experiment.
     */
    description?: string;
    /**
     * Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters.
     */
    displayName?: string;
    /**
     * End time of this experiment.
     */
    endTime?: string;
    /**
     * Maximum number of days to run the experiment. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days.
     */
    experimentLength?: string;
    /**
     * Last update time of this experiment.
     */
    lastUpdateTime?: string;
    /**
     * The name of the experiment. Format: projects//locations//agents//environments//experiments/..
     */
    name?: string;
    /**
     * The inference result which includes an objective metric to optimize and the confidence interval.
     */
    result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;
    /**
     * The configuration for auto rollout.
     */
    rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;
    /**
     * The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED.
     */
    rolloutFailureReason?: string;
    /**
     * State of the auto-rollout process.
     */
    rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;
    /**
     * Start time of this experiment.
     */
    startTime?: string;
    /**
     * The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT->RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT->DONE or RUNNING->DONE.
     */
    state?: GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;
    /**
     * The history of updates to the experiment variants.
     */
    variantsHistory?: GoogleCloudDialogflowCxV3beta1VariantsHistory[];
}
