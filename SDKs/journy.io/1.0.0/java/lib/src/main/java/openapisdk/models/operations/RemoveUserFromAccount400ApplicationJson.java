package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class RemoveUserFromAccount400ApplicationJson {
    @JsonProperty("errors")
    public RemoveUserFromAccount400ApplicationJsonErrors errors;
    public RemoveUserFromAccount400ApplicationJson withErrors(RemoveUserFromAccount400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount400ApplicationJsonMeta meta;
    public RemoveUserFromAccount400ApplicationJson withMeta(RemoveUserFromAccount400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}