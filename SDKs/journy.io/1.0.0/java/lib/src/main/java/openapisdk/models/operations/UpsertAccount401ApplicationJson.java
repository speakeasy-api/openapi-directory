package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccount401ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertAccount401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertAccount401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertAccount401ApplicationJsonMeta meta;
    public UpsertAccount401ApplicationJson withMeta(UpsertAccount401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}