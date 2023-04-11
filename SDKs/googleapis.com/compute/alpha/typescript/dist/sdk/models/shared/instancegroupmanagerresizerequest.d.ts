import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupManagerResizeRequestStatus } from "./instancegroupmanagerresizerequeststatus";
import { QueuingPolicy } from "./queuingpolicy";
/**
 * [Output only] Current state of the request.
 */
export declare enum InstanceGroupManagerResizeRequestStateEnum {
    Accepted = "ACCEPTED",
    Cancelled = "CANCELLED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Provisioning = "PROVISIONING",
    Succeeded = "SUCCEEDED"
}
/**
 * InstanceGroupManagerResizeRequest represents a request to create a number of VMs: either immediately or by queuing the request for the specified time. This resize request is nested under InstanceGroupManager and the VMs created by this request are added to the owning InstanceGroupManager.
 */
export declare class InstanceGroupManagerResizeRequest extends SpeakeasyBase {
    /**
     * The count of instances to create as part of this resize request.
     */
    count?: number;
    /**
     * [Output Only] The creation timestamp for this resize request in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource.
     */
    description?: string;
    /**
     * [Output Only] A unique identifier for this resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * [Output Only] The resource type, which is always compute#instanceGroupManagerResizeRequest for resize requests.
     */
    kind?: string;
    /**
     * The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.
     */
    name?: string;
    /**
     * Queuing parameters for the requested deferred capacity.
     */
    queuingPolicy?: QueuingPolicy;
    /**
     * [Output Only] The URL for this resize request. The server defines this URL.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output only] Current state of the request.
     */
    state?: InstanceGroupManagerResizeRequestStateEnum;
    status?: InstanceGroupManagerResizeRequestStatus;
    /**
     * [Output Only] The URL of a zone where the resize request is located. Populated only for zonal resize requests.
     */
    zone?: string;
}
