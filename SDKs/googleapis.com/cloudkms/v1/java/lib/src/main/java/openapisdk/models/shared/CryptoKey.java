package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKey
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
**/
public class CryptoKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CryptoKey withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyBackend")
    public String cryptoKeyBackend;
    public CryptoKey withCryptoKeyBackend(String cryptoKeyBackend) {
        this.cryptoKeyBackend = cryptoKeyBackend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyScheduledDuration")
    public String destroyScheduledDuration;
    public CryptoKey withDestroyScheduledDuration(String destroyScheduledDuration) {
        this.destroyScheduledDuration = destroyScheduledDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importOnly")
    public Boolean importOnly;
    public CryptoKey withImportOnly(Boolean importOnly) {
        this.importOnly = importOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CryptoKey withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CryptoKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRotationTime")
    public String nextRotationTime;
    public CryptoKey withNextRotationTime(String nextRotationTime) {
        this.nextRotationTime = nextRotationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public CryptoKeyVersion primary;
    public CryptoKey withPrimary(CryptoKeyVersion primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public CryptoKeyPurposeEnum purpose;
    public CryptoKey withPurpose(CryptoKeyPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationPeriod")
    public String rotationPeriod;
    public CryptoKey withRotationPeriod(String rotationPeriod) {
        this.rotationPeriod = rotationPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionTemplate")
    public CryptoKeyVersionTemplate versionTemplate;
    public CryptoKey withVersionTemplate(CryptoKeyVersionTemplate versionTemplate) {
        this.versionTemplate = versionTemplate;
        return this;
    }
}