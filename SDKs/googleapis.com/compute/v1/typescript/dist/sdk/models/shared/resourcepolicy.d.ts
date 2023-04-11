import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyGroupPlacementPolicy } from "./resourcepolicygroupplacementpolicy";
import { ResourcePolicyInstanceSchedulePolicy } from "./resourcepolicyinstanceschedulepolicy";
import { ResourcePolicyResourceStatus } from "./resourcepolicyresourcestatus";
import { ResourcePolicySnapshotSchedulePolicy } from "./resourcepolicysnapshotschedulepolicy";
/**
 * [Output Only] The status of resource policy creation.
 */
export declare enum ResourcePolicyStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Expired = "EXPIRED",
    Invalid = "INVALID",
    Ready = "READY"
}
/**
 * Represents a Resource Policy resource. You can use resource policies to schedule actions for some Compute Engine resources. For example, you can use them to schedule persistent disk snapshots.
 */
export declare class ResourcePolicy extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    description?: string;
    /**
     * A GroupPlacementPolicy specifies resource placement configuration. It specifies the failure bucket separation as well as network locality
     */
    groupPlacementPolicy?: ResourcePolicyGroupPlacementPolicy;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * An InstanceSchedulePolicy specifies when and how frequent certain operations are performed on the instance.
     */
    instanceSchedulePolicy?: ResourcePolicyInstanceSchedulePolicy;
    /**
     * [Output Only] Type of the resource. Always compute#resource_policies for resource policies.
     */
    kind?: string;
    /**
     * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    region?: string;
    /**
     * Contains output only fields. Use this sub-message for all output fields set on ResourcePolicy. The internal structure of this "status" field should mimic the structure of ResourcePolicy proto specification.
     */
    resourceStatus?: ResourcePolicyResourceStatus;
    /**
     * [Output Only] Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * A snapshot schedule policy specifies when and how frequently snapshots are to be created for the target disk. Also specifies how many and how long these scheduled snapshots should be retained.
     */
    snapshotSchedulePolicy?: ResourcePolicySnapshotSchedulePolicy;
    /**
     * [Output Only] The status of resource policy creation.
     */
    status?: ResourcePolicyStatusEnum;
}
