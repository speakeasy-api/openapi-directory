import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
 */
export declare class EncryptionKey extends SpeakeasyBase {
    /**
     * Google Cloud KMS encryption key. Format: `projects/* /locations/* /keyRings/* /cryptoKeys/*`
     */
    gcpKmsEncryptionKey?: string;
}
