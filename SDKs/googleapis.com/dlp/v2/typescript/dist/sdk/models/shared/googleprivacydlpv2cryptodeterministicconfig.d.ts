import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
 */
export declare class GooglePrivacyDlpV2CryptoDeterministicConfig extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    context?: GooglePrivacyDlpV2FieldId;
    /**
     * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
     */
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
    /**
     * Type of information detected by the API.
     */
    surrogateInfoType?: GooglePrivacyDlpV2InfoType;
}
