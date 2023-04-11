import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A KeyId identifies a specific public key, usually by hashing the public key.
 */
export declare class KeyId extends SpeakeasyBase {
    /**
     * Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key.
     */
    keyId?: string;
}
