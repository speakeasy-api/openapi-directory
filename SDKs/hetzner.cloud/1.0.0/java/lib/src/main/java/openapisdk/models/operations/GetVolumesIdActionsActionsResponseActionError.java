package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumesIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetVolumesIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetVolumesIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetVolumesIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}