package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Certificate
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDescription")
    public CertificateDescription certificateDescription;
    public Certificate withCertificateDescription(CertificateDescription certificateDescription) {
        this.certificateDescription = certificateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateTemplate")
    public String certificateTemplate;
    public Certificate withCertificateTemplate(String certificateTemplate) {
        this.certificateTemplate = certificateTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public CertificateConfig config;
    public Certificate withConfig(CertificateConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Certificate withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerCertificateAuthority")
    public String issuerCertificateAuthority;
    public Certificate withIssuerCertificateAuthority(String issuerCertificateAuthority) {
        this.issuerCertificateAuthority = issuerCertificateAuthority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Certificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public Certificate withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Certificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCertificate")
    public String pemCertificate;
    public Certificate withPemCertificate(String pemCertificate) {
        this.pemCertificate = pemCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCertificateChain")
    public String[] pemCertificateChain;
    public Certificate withPemCertificateChain(String[] pemCertificateChain) {
        this.pemCertificateChain = pemCertificateChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCsr")
    public String pemCsr;
    public Certificate withPemCsr(String pemCsr) {
        this.pemCsr = pemCsr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationDetails")
    public RevocationDetails revocationDetails;
    public Certificate withRevocationDetails(RevocationDetails revocationDetails) {
        this.revocationDetails = revocationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectMode")
    public CertificateSubjectModeEnum subjectMode;
    public Certificate withSubjectMode(CertificateSubjectModeEnum subjectMode) {
        this.subjectMode = subjectMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Certificate withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}