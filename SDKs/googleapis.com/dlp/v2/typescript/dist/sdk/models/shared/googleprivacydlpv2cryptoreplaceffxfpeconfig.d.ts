import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Common alphabets.
 */
export declare enum GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum {
    FfxCommonNativeAlphabetUnspecified = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED",
    Numeric = "NUMERIC",
    Hexadecimal = "HEXADECIMAL",
    UpperCaseAlphaNumeric = "UPPER_CASE_ALPHA_NUMERIC",
    AlphaNumeric = "ALPHA_NUMERIC"
}
/**
 * Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
 */
export declare class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig extends SpeakeasyBase {
    /**
     * Common alphabets.
     */
    commonAlphabet?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;
    /**
     * General identifier of a data field in a storage service.
     */
    context?: GooglePrivacyDlpV2FieldId;
    /**
     * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
     */
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
    /**
     * This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/
     */
    customAlphabet?: string;
    /**
     * The native way to select the alphabet. Must be in the range [2, 95].
     */
    radix?: number;
    /**
     * Type of information detected by the API.
     */
    surrogateInfoType?: GooglePrivacyDlpV2InfoType;
}
