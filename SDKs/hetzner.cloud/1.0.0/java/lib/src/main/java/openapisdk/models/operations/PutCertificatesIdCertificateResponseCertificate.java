package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutCertificatesIdCertificateResponseCertificate {
    @JsonProperty("certificate")
    public String certificate;
    public PutCertificatesIdCertificateResponseCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PutCertificatesIdCertificateResponseCertificate withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("domain_names")
    public String[] domainNames;
    public PutCertificatesIdCertificateResponseCertificate withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PutCertificatesIdCertificateResponseCertificate withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PutCertificatesIdCertificateResponseCertificate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PutCertificatesIdCertificateResponseCertificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutCertificatesIdCertificateResponseCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("not_valid_after")
    public String notValidAfter;
    public PutCertificatesIdCertificateResponseCertificate withNotValidAfter(String notValidAfter) {
        this.notValidAfter = notValidAfter;
        return this;
    }
    @JsonProperty("not_valid_before")
    public String notValidBefore;
    public PutCertificatesIdCertificateResponseCertificate withNotValidBefore(String notValidBefore) {
        this.notValidBefore = notValidBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PutCertificatesIdCertificateResponseCertificateStatus status;
    public PutCertificatesIdCertificateResponseCertificate withStatus(PutCertificatesIdCertificateResponseCertificateStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PutCertificatesIdCertificateResponseCertificateTypeEnum type;
    public PutCertificatesIdCertificateResponseCertificate withType(PutCertificatesIdCertificateResponseCertificateTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("used_by")
    public PutCertificatesIdCertificateResponseCertificateUsedBy[] usedBy;
    public PutCertificatesIdCertificateResponseCertificate withUsedBy(PutCertificatesIdCertificateResponseCertificateUsedBy[] usedBy) {
        this.usedBy = usedBy;
        return this;
    }
}