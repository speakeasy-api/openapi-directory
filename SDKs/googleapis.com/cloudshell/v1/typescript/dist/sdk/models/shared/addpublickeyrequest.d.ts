import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for AddPublicKey.
 */
export declare class AddPublicKeyRequest extends SpeakeasyBase {
    /**
     * Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64.
     */
    key?: string;
}
