package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsPoweronActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsPoweronActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsPoweronActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsPoweronActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}