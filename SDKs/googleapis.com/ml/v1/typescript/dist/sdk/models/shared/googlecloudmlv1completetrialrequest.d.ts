import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
/**
 * The request message for the CompleteTrial service method.
 */
export declare class GoogleCloudMlV1CompleteTrialRequest extends SpeakeasyBase {
    /**
     * A message representing a measurement.
     */
    finalMeasurement?: GoogleCloudMlV1Measurement;
    /**
     * Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true.
     */
    infeasibleReason?: string;
    /**
     * Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored.
     */
    trialInfeasible?: boolean;
}
