package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount201ApplicationJson
 * The object was created
**/
public class RemoveUserFromAccount201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount201ApplicationJsonMeta meta;
    public RemoveUserFromAccount201ApplicationJson withMeta(RemoveUserFromAccount201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}