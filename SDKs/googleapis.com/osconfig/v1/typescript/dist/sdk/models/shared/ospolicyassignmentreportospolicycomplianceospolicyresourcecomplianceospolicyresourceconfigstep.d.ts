import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration step type.
 */
export declare enum OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Validation = "VALIDATION",
    DesiredStateCheck = "DESIRED_STATE_CHECK",
    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT",
    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}
/**
 * Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
 */
export declare class OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep extends SpeakeasyBase {
    /**
     * An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution.
     */
    errorMessage?: string;
    /**
     * Configuration step type.
     */
    type?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnum;
}
