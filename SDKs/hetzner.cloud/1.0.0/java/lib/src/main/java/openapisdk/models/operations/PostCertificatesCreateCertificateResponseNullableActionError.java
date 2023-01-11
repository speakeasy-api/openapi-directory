package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostCertificatesCreateCertificateResponseNullableActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostCertificatesCreateCertificateResponseNullableActionError {
    @JsonProperty("code")
    public String code;
    public PostCertificatesCreateCertificateResponseNullableActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostCertificatesCreateCertificateResponseNullableActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}