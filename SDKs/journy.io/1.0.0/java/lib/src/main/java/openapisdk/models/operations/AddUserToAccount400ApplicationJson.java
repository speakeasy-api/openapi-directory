package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccount400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class AddUserToAccount400ApplicationJson {
    @JsonProperty("errors")
    public AddUserToAccount400ApplicationJsonErrors errors;
    public AddUserToAccount400ApplicationJson withErrors(AddUserToAccount400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public AddUserToAccount400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public AddUserToAccount400ApplicationJsonMeta meta;
    public AddUserToAccount400ApplicationJson withMeta(AddUserToAccount400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}