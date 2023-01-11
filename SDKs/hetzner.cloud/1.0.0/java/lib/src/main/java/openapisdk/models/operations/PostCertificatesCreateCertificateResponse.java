package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCertificatesCreateCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostCertificatesCreateCertificateResponseNullableAction action;
    public PostCertificatesCreateCertificateResponse withAction(PostCertificatesCreateCertificateResponseNullableAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("certificate")
    public PostCertificatesCreateCertificateResponseCertificate certificate;
    public PostCertificatesCreateCertificateResponse withCertificate(PostCertificatesCreateCertificateResponseCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
}