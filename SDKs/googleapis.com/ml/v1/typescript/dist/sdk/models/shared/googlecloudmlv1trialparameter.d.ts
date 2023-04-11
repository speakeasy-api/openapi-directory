import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
 */
export declare class GoogleCloudMlV1TrialParameter extends SpeakeasyBase {
    /**
     * Must be set if ParameterType is DOUBLE or DISCRETE.
     */
    floatValue?: number;
    /**
     * Must be set if ParameterType is INTEGER
     */
    intValue?: string;
    /**
     * The name of the parameter.
     */
    parameter?: string;
    /**
     * Must be set if ParameterTypeis CATEGORICAL
     */
    stringValue?: string;
}
