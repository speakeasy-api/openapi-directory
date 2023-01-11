package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2PrimitiveTransformation
 * A rule for transforming a value.
**/
public class GooglePrivacyDlpV2PrimitiveTransformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketingConfig")
    public GooglePrivacyDlpV2BucketingConfig bucketingConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withBucketingConfig(GooglePrivacyDlpV2BucketingConfig bucketingConfig) {
        this.bucketingConfig = bucketingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("characterMaskConfig")
    public GooglePrivacyDlpV2CharacterMaskConfig characterMaskConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withCharacterMaskConfig(GooglePrivacyDlpV2CharacterMaskConfig characterMaskConfig) {
        this.characterMaskConfig = characterMaskConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoDeterministicConfig")
    public GooglePrivacyDlpV2CryptoDeterministicConfig cryptoDeterministicConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withCryptoDeterministicConfig(GooglePrivacyDlpV2CryptoDeterministicConfig cryptoDeterministicConfig) {
        this.cryptoDeterministicConfig = cryptoDeterministicConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoHashConfig")
    public GooglePrivacyDlpV2CryptoHashConfig cryptoHashConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withCryptoHashConfig(GooglePrivacyDlpV2CryptoHashConfig cryptoHashConfig) {
        this.cryptoHashConfig = cryptoHashConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoReplaceFfxFpeConfig")
    public GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig cryptoReplaceFfxFpeConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withCryptoReplaceFfxFpeConfig(GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig cryptoReplaceFfxFpeConfig) {
        this.cryptoReplaceFfxFpeConfig = cryptoReplaceFfxFpeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateShiftConfig")
    public GooglePrivacyDlpV2DateShiftConfig dateShiftConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withDateShiftConfig(GooglePrivacyDlpV2DateShiftConfig dateShiftConfig) {
        this.dateShiftConfig = dateShiftConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedSizeBucketingConfig")
    public GooglePrivacyDlpV2FixedSizeBucketingConfig fixedSizeBucketingConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withFixedSizeBucketingConfig(GooglePrivacyDlpV2FixedSizeBucketingConfig fixedSizeBucketingConfig) {
        this.fixedSizeBucketingConfig = fixedSizeBucketingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redactConfig")
    public java.util.Map<String, Object> redactConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withRedactConfig(java.util.Map<String, Object> redactConfig) {
        this.redactConfig = redactConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceConfig")
    public GooglePrivacyDlpV2ReplaceValueConfig replaceConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withReplaceConfig(GooglePrivacyDlpV2ReplaceValueConfig replaceConfig) {
        this.replaceConfig = replaceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceDictionaryConfig")
    public GooglePrivacyDlpV2ReplaceDictionaryConfig replaceDictionaryConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withReplaceDictionaryConfig(GooglePrivacyDlpV2ReplaceDictionaryConfig replaceDictionaryConfig) {
        this.replaceDictionaryConfig = replaceDictionaryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceWithInfoTypeConfig")
    public java.util.Map<String, Object> replaceWithInfoTypeConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withReplaceWithInfoTypeConfig(java.util.Map<String, Object> replaceWithInfoTypeConfig) {
        this.replaceWithInfoTypeConfig = replaceWithInfoTypeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timePartConfig")
    public GooglePrivacyDlpV2TimePartConfig timePartConfig;
    public GooglePrivacyDlpV2PrimitiveTransformation withTimePartConfig(GooglePrivacyDlpV2TimePartConfig timePartConfig) {
        this.timePartConfig = timePartConfig;
        return this;
    }
}