package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser500ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertUser500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertUser500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser500ApplicationJsonMeta meta;
    public UpsertUser500ApplicationJson withMeta(UpsertUser500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}