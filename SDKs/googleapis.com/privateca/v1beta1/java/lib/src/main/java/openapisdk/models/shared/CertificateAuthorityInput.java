package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthorityInput
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
public class CertificateAuthorityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessUrls")
    public AccessUrls accessUrls;
    public CertificateAuthorityInput withAccessUrls(AccessUrls accessUrls) {
        this.accessUrls = accessUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificatePolicy")
    public CertificateAuthorityPolicy certificatePolicy;
    public CertificateAuthorityInput withCertificatePolicy(CertificateAuthorityPolicy certificatePolicy) {
        this.certificatePolicy = certificatePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public CertificateConfig config;
    public CertificateAuthorityInput withConfig(CertificateConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsBucket")
    public String gcsBucket;
    public CertificateAuthorityInput withGcsBucket(String gcsBucket) {
        this.gcsBucket = gcsBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuingOptions")
    public IssuingOptions issuingOptions;
    public CertificateAuthorityInput withIssuingOptions(IssuingOptions issuingOptions) {
        this.issuingOptions = issuingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keySpec")
    public KeyVersionSpec keySpec;
    public CertificateAuthorityInput withKeySpec(KeyVersionSpec keySpec) {
        this.keySpec = keySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateAuthorityInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public CertificateAuthorityInput withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinateConfig")
    public SubordinateConfig subordinateConfig;
    public CertificateAuthorityInput withSubordinateConfig(SubordinateConfig subordinateConfig) {
        this.subordinateConfig = subordinateConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public CertificateAuthorityTierEnum tier;
    public CertificateAuthorityInput withTier(CertificateAuthorityTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CertificateAuthorityTypeEnum type;
    public CertificateAuthorityInput withType(CertificateAuthorityTypeEnum type) {
        this.type = type;
        return this;
    }
}