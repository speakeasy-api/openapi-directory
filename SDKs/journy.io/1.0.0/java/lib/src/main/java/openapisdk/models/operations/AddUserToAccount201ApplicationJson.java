package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccount201ApplicationJson
 * The object was created
**/
public class AddUserToAccount201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public AddUserToAccount201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public AddUserToAccount201ApplicationJsonMeta meta;
    public AddUserToAccount201ApplicationJson withMeta(AddUserToAccount201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}