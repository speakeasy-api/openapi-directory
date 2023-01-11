package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser401ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertUser401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertUser401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser401ApplicationJsonMeta meta;
    public UpsertUser401ApplicationJson withMeta(UpsertUser401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}