import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1TrialParameter } from "./googlecloudmlv1trialparameter";
/**
 * The detailed state of a trial.
 */
export declare enum GoogleCloudMlV1TrialStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Requested = "REQUESTED",
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Stopping = "STOPPING"
}
/**
 * A message representing a trial.
 */
export declare class GoogleCloudMlV1Trial extends SpeakeasyBase {
    /**
     * Output only. The identifier of the client that originally requested this trial.
     */
    clientId?: string;
    /**
     * Output only. Time at which the trial's status changed to COMPLETED.
     */
    endTime?: string;
    /**
     * A message representing a measurement.
     */
    finalMeasurement?: GoogleCloudMlV1Measurement;
    /**
     * Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true.
     */
    infeasibleReason?: string;
    /**
     * A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.
     */
    measurements?: GoogleCloudMlV1Measurement[];
    /**
     * Output only. Name of the trial assigned by the service.
     */
    name?: string;
    /**
     * The parameters of the trial.
     */
    parameters?: GoogleCloudMlV1TrialParameter[];
    /**
     * Output only. Time at which the trial was started.
     */
    startTime?: string;
    /**
     * The detailed state of a trial.
     */
    state?: GoogleCloudMlV1TrialStateEnum;
    /**
     * Output only. If true, the parameters in this trial are not attempted again.
     */
    trialInfeasible?: boolean;
}
/**
 * A message representing a trial.
 */
export declare class GoogleCloudMlV1TrialInput extends SpeakeasyBase {
    /**
     * A message representing a measurement.
     */
    finalMeasurement?: GoogleCloudMlV1Measurement;
    /**
     * A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.
     */
    measurements?: GoogleCloudMlV1Measurement[];
    /**
     * The parameters of the trial.
     */
    parameters?: GoogleCloudMlV1TrialParameter[];
    /**
     * The detailed state of a trial.
     */
    state?: GoogleCloudMlV1TrialStateEnum;
}
