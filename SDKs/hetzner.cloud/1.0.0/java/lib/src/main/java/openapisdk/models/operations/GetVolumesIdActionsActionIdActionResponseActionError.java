package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumesIdActionsActionIdActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class GetVolumesIdActionsActionIdActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public GetVolumesIdActionsActionIdActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetVolumesIdActionsActionIdActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}