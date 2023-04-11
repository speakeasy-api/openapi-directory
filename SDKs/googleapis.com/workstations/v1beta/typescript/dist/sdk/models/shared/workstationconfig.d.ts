import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { Host } from "./host";
import { PersistentDirectory } from "./persistentdirectory";
import { Status } from "./status";
/**
 * A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.
 */
export declare class WorkstationConfig extends SpeakeasyBase {
    /**
     * Client-specified annotations.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Status conditions describing the current resource state.
     */
    conditions?: Status[];
    /**
     * A Docker container.
     */
    container?: Container;
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
     * A customer-managed encryption key for the Compute Engine resources of this workstation configuration.
     */
    encryptionKey?: CustomerEncryptionKey;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Runtime host for a workstation.
     */
    host?: Host;
    /**
     * How long to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness. Defaults to 20 minutes.
     */
    idleTimeout?: string;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: Record<string, string>;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Directories to persist across workstation sessions.
     */
    persistentDirectories?: PersistentDirectory[];
    /**
     * Output only. Indicates whether this resource is currently being updated to match its intended state.
     */
    reconciling?: boolean;
    /**
     * How long to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this configuration should never time out. Must be greater than 0 and less than 24 hours if encryption_key is set. Defaults to 12 hours.
     */
    runningTimeout?: string;
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
 * A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.
 */
export declare class WorkstationConfigInput extends SpeakeasyBase {
    /**
     * Client-specified annotations.
     */
    annotations?: Record<string, string>;
    /**
     * A Docker container.
     */
    container?: Container;
    /**
     * Human-readable name for this resource.
     */
    displayName?: string;
    /**
     * A customer-managed encryption key for the Compute Engine resources of this workstation configuration.
     */
    encryptionKey?: CustomerEncryptionKey;
    /**
     * Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Runtime host for a workstation.
     */
    host?: Host;
    /**
     * How long to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness. Defaults to 20 minutes.
     */
    idleTimeout?: string;
    /**
     * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
     */
    labels?: Record<string, string>;
    /**
     * Full name of this resource.
     */
    name?: string;
    /**
     * Directories to persist across workstation sessions.
     */
    persistentDirectories?: PersistentDirectory[];
    /**
     * How long to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this configuration should never time out. Must be greater than 0 and less than 24 hours if encryption_key is set. Defaults to 12 hours.
     */
    runningTimeout?: string;
}
