import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatus } from "./replicationstatus";
/**
 * Output only. The current state of the SecretVersion.
 */
export declare enum SecretVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Destroyed = "DESTROYED"
}
/**
 * A secret version resource in the Secret Manager API.
 */
export declare class SecretVersion extends SpeakeasyBase {
    /**
     * Output only. True if payload checksum specified in SecretPayload object has been received by SecretManagerService on SecretManagerService.AddSecretVersion.
     */
    clientSpecifiedPayloadChecksum?: boolean;
    /**
     * Output only. The time at which the SecretVersion was created.
     */
    createTime?: string;
    /**
     * Output only. The time this SecretVersion was destroyed. Only present if state is DESTROYED.
     */
    destroyTime?: string;
    /**
     * Output only. Etag of the currently stored SecretVersion.
     */
    etag?: string;
    /**
     * Output only. The resource name of the SecretVersion in the format `projects/* /secrets/* /versions/*`. SecretVersion IDs in a Secret start at 1 and are incremented for each subsequent version of the secret.
     */
    name?: string;
    /**
     * The replication status of a SecretVersion.
     */
    replicationStatus?: ReplicationStatus;
    /**
     * Output only. The current state of the SecretVersion.
     */
    state?: SecretVersionStateEnum;
}
