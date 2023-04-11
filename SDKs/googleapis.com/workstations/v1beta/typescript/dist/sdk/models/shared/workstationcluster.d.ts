import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateClusterConfig, PrivateClusterConfigInput } from "./privateclusterconfig";
import { Status } from "./status";
/**
 * A grouping of workstation configurations and the associated workstations in that region.
 */
export declare class WorkstationCluster extends SpeakeasyBase {
    /**
     * Client-specified annotations.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Status conditions describing the current resource state.
     */
    conditions?: Status[];
    /**
     * Output only. Time when this resource was created.
     */
    createTime?: string;
    /**
     * Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.
     */
    degraded?: boolean;
    /**
     * Output only. Time when this resource was soft-deleted.
     */
    deleteTime?: string;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: Record<string, string>;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.
     */
    network?: string;
    /**
     * Configuration options for private clusters.
     */
    privateClusterConfig?: PrivateClusterConfig;
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean;
    /**
     * Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.
     */
    subnetwork?: string;
    /**
     * Output only. A system-assigned unique identified for this resource.
     */
    uid?: string;
    /**
     * Output only. Time when this resource was most recently updated.
     */
    updateTime?: string;
}
/**
 * A grouping of workstation configurations and the associated workstations in that region.
 */
export declare class WorkstationClusterInput extends SpeakeasyBase {
    /**
     * Client-specified annotations.
     */
    annotations?: Record<string, string>;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: Record<string, string>;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.
     */
    network?: string;
    /**
     * Configuration options for private clusters.
     */
    privateClusterConfig?: PrivateClusterConfigInput;
    /**
     * Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.
     */
    subnetwork?: string;
}
