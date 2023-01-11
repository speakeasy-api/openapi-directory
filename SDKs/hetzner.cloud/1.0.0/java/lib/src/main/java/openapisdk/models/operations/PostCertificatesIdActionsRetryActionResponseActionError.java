package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostCertificatesIdActionsRetryActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostCertificatesIdActionsRetryActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostCertificatesIdActionsRetryActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostCertificatesIdActionsRetryActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}