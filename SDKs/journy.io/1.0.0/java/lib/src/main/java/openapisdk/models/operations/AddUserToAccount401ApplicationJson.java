package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccount401ApplicationJson
 * The error message should specify what cause the error
**/
public class AddUserToAccount401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public AddUserToAccount401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public AddUserToAccount401ApplicationJsonMeta meta;
    public AddUserToAccount401ApplicationJson withMeta(AddUserToAccount401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}