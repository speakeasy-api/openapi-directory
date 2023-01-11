package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsAddToPlacementGroupActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsAddToPlacementGroupActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsAddToPlacementGroupActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsAddToPlacementGroupActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}