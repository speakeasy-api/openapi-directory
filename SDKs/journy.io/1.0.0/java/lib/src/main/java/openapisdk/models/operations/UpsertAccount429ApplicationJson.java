package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccount429ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertAccount429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertAccount429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertAccount429ApplicationJsonMeta meta;
    public UpsertAccount429ApplicationJson withMeta(UpsertAccount429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}