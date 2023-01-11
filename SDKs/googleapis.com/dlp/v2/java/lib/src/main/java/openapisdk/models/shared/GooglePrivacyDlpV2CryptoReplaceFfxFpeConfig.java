package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
 * Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
**/
public class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonAlphabet")
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum commonAlphabet;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withCommonAlphabet(GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum commonAlphabet) {
        this.commonAlphabet = commonAlphabet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public GooglePrivacyDlpV2FieldId context;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withContext(GooglePrivacyDlpV2FieldId context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKey")
    public GooglePrivacyDlpV2CryptoKey cryptoKey;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withCryptoKey(GooglePrivacyDlpV2CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAlphabet")
    public String customAlphabet;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withCustomAlphabet(String customAlphabet) {
        this.customAlphabet = customAlphabet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radix")
    public Integer radix;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withRadix(Integer radix) {
        this.radix = radix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surrogateInfoType")
    public GooglePrivacyDlpV2InfoType surrogateInfoType;
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig withSurrogateInfoType(GooglePrivacyDlpV2InfoType surrogateInfoType) {
        this.surrogateInfoType = surrogateInfoType;
        return this;
    }
}