import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SSH public key information associated with a Google account.
 */
export declare class SshPublicKeyInput extends SpeakeasyBase {
    /**
     * An expiration time in microseconds since epoch.
     */
    expirationTimeUsec?: string;
    /**
     * Public key text in SSH format, defined by RFC4253 section 6.6.
     */
    key?: string;
}
/**
 * The SSH public key information associated with a Google account.
 */
export declare class SshPublicKey extends SpeakeasyBase {
    /**
     * An expiration time in microseconds since epoch.
     */
    expirationTimeUsec?: string;
    /**
     * Output only. The SHA-256 fingerprint of the SSH public key.
     */
    fingerprint?: string;
    /**
     * Public key text in SSH format, defined by RFC4253 section 6.6.
     */
    key?: string;
    /**
     * Output only. The canonical resource name.
     */
    name?: string;
}
