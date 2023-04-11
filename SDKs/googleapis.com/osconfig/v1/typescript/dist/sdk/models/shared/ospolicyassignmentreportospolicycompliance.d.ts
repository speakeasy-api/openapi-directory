import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance";
/**
 * The compliance state of the OS policy.
 */
export declare enum OSPolicyAssignmentReportOSPolicyComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * Compliance data for an OS policy
 */
export declare class OSPolicyAssignmentReportOSPolicyCompliance extends SpeakeasyBase {
    /**
     * The compliance state of the OS policy.
     */
    complianceState?: OSPolicyAssignmentReportOSPolicyComplianceComplianceStateEnum;
    /**
     * The reason for the OS policy to be in an unknown compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. If populated, the field can contain one of the following values: * `vm-not-running`: The VM was not running. * `os-policies-not-supported-by-agent`: The version of the OS Config agent running on the VM does not support running OS policies. * `no-agent-detected`: The OS Config agent is not detected for the VM. * `resource-execution-errors`: The OS Config agent encountered errors while executing one or more resources in the policy. See `os_policy_resource_compliances` for details. * `task-timeout`: The task sent to the agent to apply the policy timed out. * `unexpected-agent-state`: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * `internal-service-errors`: Internal service errors were encountered while attempting to apply the policy.
     */
    complianceStateReason?: string;
    /**
     * The OS policy id
     */
    osPolicyId?: string;
    /**
     * Compliance data for each resource within the policy that is applied to the VM.
     */
    osPolicyResourceCompliances?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance[];
}
