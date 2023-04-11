import { SpeakeasyBase } from "../../../internal/utils";
import { BulkInsertInstanceResource } from "./bulkinsertinstanceresource";
import { QueuedResourceStatus } from "./queuedresourcestatus";
import { QueuingPolicy } from "./queuingpolicy";
/**
 * [Output only] High-level status of the request.
 */
export declare enum QueuedResourceStateEnum {
    Accepted = "ACCEPTED",
    Cancelled = "CANCELLED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Provisioning = "PROVISIONING",
    StateUnspecified = "STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED"
}
/**
 * QueuedResource represents a request for future capacity. The capacity is delivered in the form of other GCE resources, either Instances or Reservations.
 */
export declare class QueuedResource extends SpeakeasyBase {
    /**
     * A transient resource used in compute.instances.bulkInsert and compute.regionInstances.bulkInsert . This resource is not persisted anywhere, it is used only for processing the requests.
     */
    bulkInsertInstanceResource?: BulkInsertInstanceResource;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#queuedResource for QueuedResources.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Queuing parameters for the requested deferred capacity.
     */
    queuingPolicy?: QueuingPolicy;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output only] High-level status of the request.
     */
    state?: QueuedResourceStateEnum;
    /**
     * [Output only] Result of queuing and provisioning based on deferred capacity.
     */
    status?: QueuedResourceStatus;
    /**
     * [Output Only] URL of the zone where the resource resides. Only applicable for zonal resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    zone?: string;
}
