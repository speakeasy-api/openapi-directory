import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Denotes the state of etcd encryption.
 */
export declare enum DatabaseEncryptionStateEnum {
    Unknown = "UNKNOWN",
    Encrypted = "ENCRYPTED",
    Decrypted = "DECRYPTED"
}
/**
 * Configuration of etcd encryption.
 */
export declare class DatabaseEncryption extends SpeakeasyBase {
    /**
     * Name of CloudKMS key to use for the encryption of secrets in etcd. Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
     */
    keyName?: string;
    /**
     * Denotes the state of etcd encryption.
     */
    state?: DatabaseEncryptionStateEnum;
}
