package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccount500ApplicationJson
 * The error message should specify what cause the error
**/
public class AddUserToAccount500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public AddUserToAccount500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public AddUserToAccount500ApplicationJsonMeta meta;
    public AddUserToAccount500ApplicationJson withMeta(AddUserToAccount500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}