import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
/**
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
 */
export declare class GooglePrivacyDlpV2CryptoHashConfig extends SpeakeasyBase {
    /**
     * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
     */
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
}
