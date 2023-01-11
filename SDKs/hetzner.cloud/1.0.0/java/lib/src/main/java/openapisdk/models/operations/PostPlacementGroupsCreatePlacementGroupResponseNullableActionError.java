package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostPlacementGroupsCreatePlacementGroupResponseNullableActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError {
    @JsonProperty("code")
    public String code;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostPlacementGroupsCreatePlacementGroupResponseNullableActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}