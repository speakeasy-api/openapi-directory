import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Outcome of the configuration step.
 */
export declare enum OSPolicyResourceConfigStepOutcomeEnum {
    OutcomeUnspecified = "OUTCOME_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Configuration step type.
 */
export declare enum OSPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Validation = "VALIDATION",
    DesiredStateCheck = "DESIRED_STATE_CHECK",
    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT",
    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}
/**
 * Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
 */
export declare class OSPolicyResourceConfigStep extends SpeakeasyBase {
    /**
     * An error message recorded during the execution of this step. Only populated when outcome is FAILED.
     */
    errorMessage?: string;
    /**
     * Outcome of the configuration step.
     */
    outcome?: OSPolicyResourceConfigStepOutcomeEnum;
    /**
     * Configuration step type.
     */
    type?: OSPolicyResourceConfigStepTypeEnum;
}
