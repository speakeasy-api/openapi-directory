import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicy } from "./ospolicy";
import { OSPolicyAssignmentInstanceFilter } from "./ospolicyassignmentinstancefilter";
import { OSPolicyAssignmentRollout } from "./ospolicyassignmentrollout";
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
 */
export declare class OSPolicyAssignmentInput extends SpeakeasyBase {
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    etag?: string;
    /**
     * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
     */
    instanceFilter?: OSPolicyAssignmentInstanceFilter;
    /**
     * Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment.
     */
    name?: string;
    /**
     * Required. List of OS policies to be applied to the VMs.
     */
    osPolicies?: OSPolicy[];
    /**
     * Message to configure the rollout at the zonal level for the OS policy assignment.
     */
    rollout?: OSPolicyAssignmentRollout;
}
/**
 * Output only. OS policy assignment rollout state
 */
export declare enum OSPolicyAssignmentRolloutStateEnum {
    RolloutStateUnspecified = "ROLLOUT_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED"
}
/**
 * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
 */
export declare class OSPolicyAssignment extends SpeakeasyBase {
    /**
     * Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field.
     */
    baseline?: boolean;
    /**
     * Output only. Indicates that this revision deletes the OS policy assignment.
     */
    deleted?: boolean;
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    etag?: string;
    /**
     * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
     */
    instanceFilter?: OSPolicyAssignmentInstanceFilter;
    /**
     * Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment.
     */
    name?: string;
    /**
     * Required. List of OS policies to be applied to the VMs.
     */
    osPolicies?: OSPolicy[];
    /**
     * Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING
     */
    reconciling?: boolean;
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: string;
    /**
     * Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment
     */
    revisionId?: string;
    /**
     * Message to configure the rollout at the zonal level for the OS policy assignment.
     */
    rollout?: OSPolicyAssignmentRollout;
    /**
     * Output only. OS policy assignment rollout state
     */
    rolloutState?: OSPolicyAssignmentRolloutStateEnum;
    /**
     * Output only. Server generated unique id for the OS policy assignment resource.
     */
    uid?: string;
}
