import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single instance of a developer workstation with its own persistent storage.
 */
export declare class WorkstationInput extends SpeakeasyBase {
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
}
/**
 * Output only. Current state of the workstation.
 */
export declare enum WorkstationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    StateStarting = "STATE_STARTING",
    StateRunning = "STATE_RUNNING",
    StateStopping = "STATE_STOPPING",
    StateStopped = "STATE_STOPPED"
}
/**
 * A single instance of a developer workstation with its own persistent storage.
 */
export declare class Workstation extends SpeakeasyBase {
    /**
     * Client-specified annotations.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Time when this resource was created.
     */
    createTime?: string;
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
     * Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`.
     */
    host?: string;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: Record<string, string>;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean;
    /**
     * Output only. Current state of the workstation.
     */
    state?: WorkstationStateEnum;
    /**
     * Output only. A system-assigned unique identified for this resource.
     */
    uid?: string;
    /**
     * Output only. Time when this resource was most recently updated.
     */
    updateTime?: string;
}
