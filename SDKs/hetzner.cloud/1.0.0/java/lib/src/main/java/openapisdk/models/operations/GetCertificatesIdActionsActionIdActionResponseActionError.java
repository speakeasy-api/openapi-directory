package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCertificatesIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetCertificatesIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetCertificatesIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetCertificatesIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}