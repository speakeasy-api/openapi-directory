import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignmentReportOSPolicyCompliance } from "./ospolicyassignmentreportospolicycompliance";
/**
 * A report of the OS policy assignment status for a given instance.
 */
export declare class OSPolicyAssignmentReport extends SpeakeasyBase {
    /**
     * The Compute Engine VM instance name.
     */
    instance?: string;
    /**
     * Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs.
     */
    lastRunId?: string;
    /**
     * The `OSPolicyAssignmentReport` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/osPolicyAssignments/{os_policy_assignment_id}/report`
     */
    name?: string;
    /**
     * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`
     */
    osPolicyAssignment?: string;
    /**
     * Compliance data for each `OSPolicy` that is applied to the VM.
     */
    osPolicyCompliances?: OSPolicyAssignmentReportOSPolicyCompliance[];
    /**
     * Timestamp for when the report was last generated.
     */
    updateTime?: string;
}
