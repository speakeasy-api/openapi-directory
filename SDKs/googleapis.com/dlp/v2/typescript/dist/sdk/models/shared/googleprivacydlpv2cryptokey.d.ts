import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KmsWrappedCryptoKey } from "./googleprivacydlpv2kmswrappedcryptokey";
import { GooglePrivacyDlpV2TransientCryptoKey } from "./googleprivacydlpv2transientcryptokey";
import { GooglePrivacyDlpV2UnwrappedCryptoKey } from "./googleprivacydlpv2unwrappedcryptokey";
/**
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
 */
export declare class GooglePrivacyDlpV2CryptoKey extends SpeakeasyBase {
    /**
     * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
     */
    kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;
    /**
     * Use this to have a random data crypto key generated. It will be discarded after the request finishes.
     */
    transient?: GooglePrivacyDlpV2TransientCryptoKey;
    /**
     * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
     */
    unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
}
