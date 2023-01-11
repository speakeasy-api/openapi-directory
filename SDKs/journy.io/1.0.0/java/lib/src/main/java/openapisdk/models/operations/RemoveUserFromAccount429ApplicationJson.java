package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccount429ApplicationJson
 * The error message should specify what cause the error
**/
public class RemoveUserFromAccount429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public RemoveUserFromAccount429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public RemoveUserFromAccount429ApplicationJsonMeta meta;
    public RemoveUserFromAccount429ApplicationJson withMeta(RemoveUserFromAccount429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}