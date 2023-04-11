import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Private password leak verification info.
 */
export declare class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput extends SpeakeasyBase {
    /**
     * Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`.
     */
    encryptedUserCredentialsHash?: string;
    /**
     * Optional. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix.
     */
    lookupHashPrefix?: string;
}
/**
 * Private password leak verification info.
 */
export declare class GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification extends SpeakeasyBase {
    /**
     * Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of `reencrypted_user_credentials_hash`
     */
    encryptedLeakMatchPrefixes?: string[];
    /**
     * Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`.
     */
    encryptedUserCredentialsHash?: string;
    /**
     * Optional. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix.
     */
    lookupHashPrefix?: string;
    /**
     * Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`.
     */
    reencryptedUserCredentialsHash?: string;
}
