package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser403ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertUser403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertUser403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser403ApplicationJsonMeta meta;
    public UpsertUser403ApplicationJson withMeta(UpsertUser403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}