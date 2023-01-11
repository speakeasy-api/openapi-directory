package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateInput
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
public class CertificateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDescription")
    public CertificateDescription certificateDescription;
    public CertificateInput withCertificateDescription(CertificateDescription certificateDescription) {
        this.certificateDescription = certificateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateTemplate")
    public String certificateTemplate;
    public CertificateInput withCertificateTemplate(String certificateTemplate) {
        this.certificateTemplate = certificateTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public CertificateConfig config;
    public CertificateInput withConfig(CertificateConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public CertificateInput withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCsr")
    public String pemCsr;
    public CertificateInput withPemCsr(String pemCsr) {
        this.pemCsr = pemCsr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationDetails")
    public RevocationDetails revocationDetails;
    public CertificateInput withRevocationDetails(RevocationDetails revocationDetails) {
        this.revocationDetails = revocationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectMode")
    public CertificateSubjectModeEnum subjectMode;
    public CertificateInput withSubjectMode(CertificateSubjectModeEnum subjectMode) {
        this.subjectMode = subjectMode;
        return this;
    }
}