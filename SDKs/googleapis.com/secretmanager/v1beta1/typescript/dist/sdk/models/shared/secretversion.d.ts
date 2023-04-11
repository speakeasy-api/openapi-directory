import { SpeakeasyBase } from "../../../internal/utils";
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
     * Output only. The time at which the SecretVersion was created.
     */
    createTime?: string;
    /**
     * Output only. The time this SecretVersion was destroyed. Only present if state is DESTROYED.
     */
    destroyTime?: string;
    /**
     * Output only. The resource name of the SecretVersion in the format `projects/* /secrets/* /versions/*`. SecretVersion IDs in a Secret start at 1 and are incremented for each subsequent version of the secret.
     */
    name?: string;
    /**
     * Output only. The current state of the SecretVersion.
     */
    state?: SecretVersionStateEnum;
}
