package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateIssuanceConfig
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
**/
public class CertificateIssuanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityConfig")
    public CertificateAuthorityConfig certificateAuthorityConfig;
    public CertificateIssuanceConfig withCertificateAuthorityConfig(CertificateAuthorityConfig certificateAuthorityConfig) {
        this.certificateAuthorityConfig = certificateAuthorityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CertificateIssuanceConfig withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CertificateIssuanceConfig withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public CertificateIssuanceConfigKeyAlgorithmEnum keyAlgorithm;
    public CertificateIssuanceConfig withKeyAlgorithm(CertificateIssuanceConfigKeyAlgorithmEnum keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateIssuanceConfig withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public CertificateIssuanceConfig withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateIssuanceConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotationWindowPercentage")
    public Integer rotationWindowPercentage;
    public CertificateIssuanceConfig withRotationWindowPercentage(Integer rotationWindowPercentage) {
        this.rotationWindowPercentage = rotationWindowPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CertificateIssuanceConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}