package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImagesIdActionsActionsResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetImagesIdActionsActionsResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetImagesIdActionsActionsResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetImagesIdActionsActionsResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}