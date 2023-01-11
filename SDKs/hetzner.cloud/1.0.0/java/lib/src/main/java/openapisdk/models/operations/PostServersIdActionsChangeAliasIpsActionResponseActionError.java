package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsChangeAliasIpsActionResponseActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class PostServersIdActionsChangeAliasIpsActionResponseActionError {
    @JsonProperty("code")
    public String code;
    public PostServersIdActionsChangeAliasIpsActionResponseActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PostServersIdActionsChangeAliasIpsActionResponseActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}