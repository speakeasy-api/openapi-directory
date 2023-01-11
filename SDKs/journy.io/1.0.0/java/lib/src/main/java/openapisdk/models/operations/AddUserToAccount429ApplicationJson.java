package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccount429ApplicationJson
 * The error message should specify what cause the error
**/
public class AddUserToAccount429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public AddUserToAccount429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public AddUserToAccount429ApplicationJsonMeta meta;
    public AddUserToAccount429ApplicationJson withMeta(AddUserToAccount429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}