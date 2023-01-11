package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCertificatesCreateCertificateResponseCertificate {
    @JsonProperty("certificate")
    public String certificate;
    public PostCertificatesCreateCertificateResponseCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("created")
    public String created;
    public PostCertificatesCreateCertificateResponseCertificate withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("domain_names")
    public String[] domainNames;
    public PostCertificatesCreateCertificateResponseCertificate withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public PostCertificatesCreateCertificateResponseCertificate withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostCertificatesCreateCertificateResponseCertificate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public PostCertificatesCreateCertificateResponseCertificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostCertificatesCreateCertificateResponseCertificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("not_valid_after")
    public String notValidAfter;
    public PostCertificatesCreateCertificateResponseCertificate withNotValidAfter(String notValidAfter) {
        this.notValidAfter = notValidAfter;
        return this;
    }
    @JsonProperty("not_valid_before")
    public String notValidBefore;
    public PostCertificatesCreateCertificateResponseCertificate withNotValidBefore(String notValidBefore) {
        this.notValidBefore = notValidBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostCertificatesCreateCertificateResponseCertificateStatus status;
    public PostCertificatesCreateCertificateResponseCertificate withStatus(PostCertificatesCreateCertificateResponseCertificateStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostCertificatesCreateCertificateResponseCertificateTypeEnum type;
    public PostCertificatesCreateCertificateResponseCertificate withType(PostCertificatesCreateCertificateResponseCertificateTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("used_by")
    public PostCertificatesCreateCertificateResponseCertificateUsedBy[] usedBy;
    public PostCertificatesCreateCertificateResponseCertificate withUsedBy(PostCertificatesCreateCertificateResponseCertificateUsedBy[] usedBy) {
        this.usedBy = usedBy;
        return this;
    }
}