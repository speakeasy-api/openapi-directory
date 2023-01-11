package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesIdCertificateResponseCertificate {
    @JsonProperty("certificate")
    public String certificate;
    public GetCertificatesIdCertificateResponseCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetCertificatesIdCertificateResponseCertificate withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("domain_names")
    public String[] domainNames;
    public GetCertificatesIdCertificateResponseCertificate withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public GetCertificatesIdCertificateResponseCertificate withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetCertificatesIdCertificateResponseCertificate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetCertificatesIdCertificateResponseCertificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetCertificatesIdCertificateResponseCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("not_valid_after")
    public String notValidAfter;
    public GetCertificatesIdCertificateResponseCertificate withNotValidAfter(String notValidAfter) {
        this.notValidAfter = notValidAfter;
        return this;
    }
    @JsonProperty("not_valid_before")
    public String notValidBefore;
    public GetCertificatesIdCertificateResponseCertificate withNotValidBefore(String notValidBefore) {
        this.notValidBefore = notValidBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetCertificatesIdCertificateResponseCertificateStatus status;
    public GetCertificatesIdCertificateResponseCertificate withStatus(GetCertificatesIdCertificateResponseCertificateStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetCertificatesIdCertificateResponseCertificateTypeEnum type;
    public GetCertificatesIdCertificateResponseCertificate withType(GetCertificatesIdCertificateResponseCertificateTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("used_by")
    public GetCertificatesIdCertificateResponseCertificateUsedBy[] usedBy;
    public GetCertificatesIdCertificateResponseCertificate withUsedBy(GetCertificatesIdCertificateResponseCertificateUsedBy[] usedBy) {
        this.usedBy = usedBy;
        return this;
    }
}