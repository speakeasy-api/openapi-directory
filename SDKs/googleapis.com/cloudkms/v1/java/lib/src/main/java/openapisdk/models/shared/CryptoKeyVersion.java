package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKeyVersion
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
**/
public class CryptoKeyVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public CryptoKeyVersionAlgorithmEnum algorithm;
    public CryptoKeyVersion withAlgorithm(CryptoKeyVersionAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public KeyOperationAttestation attestation;
    public CryptoKeyVersion withAttestation(KeyOperationAttestation attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CryptoKeyVersion withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyEventTime")
    public String destroyEventTime;
    public CryptoKeyVersion withDestroyEventTime(String destroyEventTime) {
        this.destroyEventTime = destroyEventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destroyTime")
    public String destroyTime;
    public CryptoKeyVersion withDestroyTime(String destroyTime) {
        this.destroyTime = destroyTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalProtectionLevelOptions")
    public ExternalProtectionLevelOptions externalProtectionLevelOptions;
    public CryptoKeyVersion withExternalProtectionLevelOptions(ExternalProtectionLevelOptions externalProtectionLevelOptions) {
        this.externalProtectionLevelOptions = externalProtectionLevelOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generateTime")
    public String generateTime;
    public CryptoKeyVersion withGenerateTime(String generateTime) {
        this.generateTime = generateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importFailureReason")
    public String importFailureReason;
    public CryptoKeyVersion withImportFailureReason(String importFailureReason) {
        this.importFailureReason = importFailureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importJob")
    public String importJob;
    public CryptoKeyVersion withImportJob(String importJob) {
        this.importJob = importJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importTime")
    public String importTime;
    public CryptoKeyVersion withImportTime(String importTime) {
        this.importTime = importTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CryptoKeyVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public CryptoKeyVersionProtectionLevelEnum protectionLevel;
    public CryptoKeyVersion withProtectionLevel(CryptoKeyVersionProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reimportEligible")
    public Boolean reimportEligible;
    public CryptoKeyVersion withReimportEligible(Boolean reimportEligible) {
        this.reimportEligible = reimportEligible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CryptoKeyVersionStateEnum state;
    public CryptoKeyVersion withState(CryptoKeyVersionStateEnum state) {
        this.state = state;
        return this;
    }
}