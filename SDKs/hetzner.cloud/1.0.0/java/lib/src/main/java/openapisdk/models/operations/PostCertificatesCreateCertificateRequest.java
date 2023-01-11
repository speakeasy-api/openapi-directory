package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCertificatesCreateCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public PostCertificatesCreateCertificateRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_names")
    public String[] domainNames;
    public PostCertificatesCreateCertificateRequest withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostCertificatesCreateCertificateRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostCertificatesCreateCertificateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_key")
    public String privateKey;
    public PostCertificatesCreateCertificateRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostCertificatesCreateCertificateRequestTypeEnum type;
    public PostCertificatesCreateCertificateRequest withType(PostCertificatesCreateCertificateRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}