package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsPoweroffActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsPoweroffActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsPoweroffActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsPoweroffActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}