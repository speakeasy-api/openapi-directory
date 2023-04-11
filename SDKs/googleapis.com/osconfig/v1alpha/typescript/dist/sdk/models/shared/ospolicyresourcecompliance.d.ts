import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceComplianceExecResourceOutput } from "./ospolicyresourcecomplianceexecresourceoutput";
import { OSPolicyResourceConfigStep } from "./ospolicyresourceconfigstep";
/**
 * Compliance state of the OS policy resource.
 */
export declare enum OSPolicyResourceComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}
/**
 * Compliance data for an OS policy resource.
 */
export declare class OSPolicyResourceCompliance extends SpeakeasyBase {
    /**
     * Ordered list of configuration steps taken by the agent for the OS policy resource.
     */
    configSteps?: OSPolicyResourceConfigStep[];
    /**
     * ExecResource specific output.
     */
    execResourceOutput?: OSPolicyResourceComplianceExecResourceOutput;
    /**
     * The id of the OS policy resource.
     */
    osPolicyResourceId?: string;
    /**
     * Compliance state of the OS policy resource.
     */
    state?: OSPolicyResourceComplianceStateEnum;
}
