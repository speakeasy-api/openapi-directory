package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKeyInput
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
public class CryptoKeyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyBackend")
    public String cryptoKeyBackend;
    public CryptoKeyInput withCryptoKeyBackend(String cryptoKeyBackend) {
        this.cryptoKeyBackend = cryptoKeyBackend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyScheduledDuration")
    public String destroyScheduledDuration;
    public CryptoKeyInput withDestroyScheduledDuration(String destroyScheduledDuration) {
        this.destroyScheduledDuration = destroyScheduledDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importOnly")
    public Boolean importOnly;
    public CryptoKeyInput withImportOnly(Boolean importOnly) {
        this.importOnly = importOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CryptoKeyInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRotationTime")
    public String nextRotationTime;
    public CryptoKeyInput withNextRotationTime(String nextRotationTime) {
        this.nextRotationTime = nextRotationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public CryptoKeyVersionInput primary;
    public CryptoKeyInput withPrimary(CryptoKeyVersionInput primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public CryptoKeyPurposeEnum purpose;
    public CryptoKeyInput withPurpose(CryptoKeyPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationPeriod")
    public String rotationPeriod;
    public CryptoKeyInput withRotationPeriod(String rotationPeriod) {
        this.rotationPeriod = rotationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionTemplate")
    public CryptoKeyVersionTemplate versionTemplate;
    public CryptoKeyInput withVersionTemplate(CryptoKeyVersionTemplate versionTemplate) {
        this.versionTemplate = versionTemplate;
        return this;
    }
}