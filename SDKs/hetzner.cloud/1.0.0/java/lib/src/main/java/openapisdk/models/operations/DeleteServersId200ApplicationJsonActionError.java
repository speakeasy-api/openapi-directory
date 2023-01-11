package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteServersId200ApplicationJsonActionError
 * Error message for the Action if error occurred, otherwise null
**/
public class DeleteServersId200ApplicationJsonActionError {
    @JsonProperty("code")
    public String code;
    public DeleteServersId200ApplicationJsonActionError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public DeleteServersId200ApplicationJsonActionError withMessage(String message) {
        this.message = message;
        return this;
    }
}