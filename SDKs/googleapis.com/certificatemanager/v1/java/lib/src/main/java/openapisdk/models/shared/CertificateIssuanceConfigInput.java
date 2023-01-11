package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateIssuanceConfigInput
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
public class CertificateIssuanceConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityConfig")
    public CertificateAuthorityConfig certificateAuthorityConfig;
    public CertificateIssuanceConfigInput withCertificateAuthorityConfig(CertificateAuthorityConfig certificateAuthorityConfig) {
        this.certificateAuthorityConfig = certificateAuthorityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CertificateIssuanceConfigInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public CertificateIssuanceConfigKeyAlgorithmEnum keyAlgorithm;
    public CertificateIssuanceConfigInput withKeyAlgorithm(CertificateIssuanceConfigKeyAlgorithmEnum keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateIssuanceConfigInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public CertificateIssuanceConfigInput withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateIssuanceConfigInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationWindowPercentage")
    public Integer rotationWindowPercentage;
    public CertificateIssuanceConfigInput withRotationWindowPercentage(Integer rotationWindowPercentage) {
        this.rotationWindowPercentage = rotationWindowPercentage;
        return this;
    }
}