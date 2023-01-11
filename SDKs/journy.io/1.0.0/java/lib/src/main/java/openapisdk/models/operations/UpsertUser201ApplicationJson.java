package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser201ApplicationJson
 * The object was created
**/
public class UpsertUser201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertUser201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser201ApplicationJsonMeta meta;
    public UpsertUser201ApplicationJson withMeta(UpsertUser201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}