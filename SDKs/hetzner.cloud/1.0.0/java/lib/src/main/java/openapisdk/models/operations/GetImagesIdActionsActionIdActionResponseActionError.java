package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImagesIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetImagesIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetImagesIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetImagesIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}