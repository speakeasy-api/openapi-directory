import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceCompliance } from "./ospolicyresourcecompliance";
/**
 * Compliance state of the OS policy.
 */
export declare enum InstanceOSPoliciesComplianceOSPolicyComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}
/**
 * Compliance data for an OS policy
 */
export declare class InstanceOSPoliciesComplianceOSPolicyCompliance extends SpeakeasyBase {
    /**
     * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`
     */
    osPolicyAssignment?: string;
    /**
     * The OS policy id
     */
    osPolicyId?: string;
    /**
     * Compliance data for each `OSPolicyResource` that is applied to the VM.
     */
    osPolicyResourceCompliances?: OSPolicyResourceCompliance[];
    /**
     * Compliance state of the OS policy.
     */
    state?: InstanceOSPoliciesComplianceOSPolicyComplianceStateEnum;
}
