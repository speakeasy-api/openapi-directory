package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCertificatesIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetCertificatesIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetCertificatesIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetCertificatesIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}