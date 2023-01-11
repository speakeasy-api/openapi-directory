package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesCertificatesResponseCertificate {
    @JsonProperty("certificate")
    public String certificate;
    public GetCertificatesCertificatesResponseCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public GetCertificatesCertificatesResponseCertificate withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("domain_names")
    public String[] domainNames;
    public GetCertificatesCertificatesResponseCertificate withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public GetCertificatesCertificatesResponseCertificate withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetCertificatesCertificatesResponseCertificate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GetCertificatesCertificatesResponseCertificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetCertificatesCertificatesResponseCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("not_valid_after")
    public String notValidAfter;
    public GetCertificatesCertificatesResponseCertificate withNotValidAfter(String notValidAfter) {
        this.notValidAfter = notValidAfter;
        return this;
    }
    @JsonProperty("not_valid_before")
    public String notValidBefore;
    public GetCertificatesCertificatesResponseCertificate withNotValidBefore(String notValidBefore) {
        this.notValidBefore = notValidBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetCertificatesCertificatesResponseCertificateStatus status;
    public GetCertificatesCertificatesResponseCertificate withStatus(GetCertificatesCertificatesResponseCertificateStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetCertificatesCertificatesResponseCertificateTypeEnum type;
    public GetCertificatesCertificatesResponseCertificate withType(GetCertificatesCertificatesResponseCertificateTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("used_by")
    public GetCertificatesCertificatesResponseCertificateUsedBy[] usedBy;
    public GetCertificatesCertificatesResponseCertificate withUsedBy(GetCertificatesCertificatesResponseCertificateUsedBy[] usedBy) {
        this.usedBy = usedBy;
        return this;
    }
}