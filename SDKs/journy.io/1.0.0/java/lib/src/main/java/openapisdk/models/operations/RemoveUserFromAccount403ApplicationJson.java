package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount403ApplicationJson
 * The error message should specify what cause the error
**/
public class RemoveUserFromAccount403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount403ApplicationJsonMeta meta;
    public RemoveUserFromAccount403ApplicationJson withMeta(RemoveUserFromAccount403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}