package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount500ApplicationJson
 * The error message should specify what cause the error
**/
public class RemoveUserFromAccount500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount500ApplicationJsonMeta meta;
    public RemoveUserFromAccount500ApplicationJson withMeta(RemoveUserFromAccount500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}