package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount401ApplicationJson
 * The error message should specify what cause the error
**/
public class RemoveUserFromAccount401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount401ApplicationJsonMeta meta;
    public RemoveUserFromAccount401ApplicationJson withMeta(RemoveUserFromAccount401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}