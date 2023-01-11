package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}