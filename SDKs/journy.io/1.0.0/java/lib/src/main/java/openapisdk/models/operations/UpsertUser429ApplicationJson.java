package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser429ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertUser429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertUser429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser429ApplicationJsonMeta meta;
    public UpsertUser429ApplicationJson withMeta(UpsertUser429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}