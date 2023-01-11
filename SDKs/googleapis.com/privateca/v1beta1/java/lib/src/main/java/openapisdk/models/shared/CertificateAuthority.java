package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAuthority
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
public class CertificateAuthority {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessUrls")
    public AccessUrls accessUrls;
    public CertificateAuthority withAccessUrls(AccessUrls accessUrls) {
        this.accessUrls = accessUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificateDescriptions")
    public CertificateDescription[] caCertificateDescriptions;
    public CertificateAuthority withCaCertificateDescriptions(CertificateDescription[] caCertificateDescriptions) {
        this.caCertificateDescriptions = caCertificateDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificatePolicy")
    public CertificateAuthorityPolicy certificatePolicy;
    public CertificateAuthority withCertificatePolicy(CertificateAuthorityPolicy certificatePolicy) {
        this.certificatePolicy = certificatePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public CertificateConfig config;
    public CertificateAuthority withConfig(CertificateConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CertificateAuthority withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public CertificateAuthority withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsBucket")
    public String gcsBucket;
    public CertificateAuthority withGcsBucket(String gcsBucket) {
        this.gcsBucket = gcsBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuingOptions")
    public IssuingOptions issuingOptions;
    public CertificateAuthority withIssuingOptions(IssuingOptions issuingOptions) {
        this.issuingOptions = issuingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keySpec")
    public KeyVersionSpec keySpec;
    public CertificateAuthority withKeySpec(KeyVersionSpec keySpec) {
        this.keySpec = keySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateAuthority withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public CertificateAuthority withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateAuthority withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCaCertificates")
    public String[] pemCaCertificates;
    public CertificateAuthority withPemCaCertificates(String[] pemCaCertificates) {
        this.pemCaCertificates = pemCaCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CertificateAuthorityStateEnum state;
    public CertificateAuthority withState(CertificateAuthorityStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinateConfig")
    public SubordinateConfig subordinateConfig;
    public CertificateAuthority withSubordinateConfig(SubordinateConfig subordinateConfig) {
        this.subordinateConfig = subordinateConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public CertificateAuthorityTierEnum tier;
    public CertificateAuthority withTier(CertificateAuthorityTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CertificateAuthorityTypeEnum type;
    public CertificateAuthority withType(CertificateAuthorityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CertificateAuthority withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}