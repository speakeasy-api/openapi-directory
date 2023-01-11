package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertUser400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class UpsertUser400ApplicationJson {
    @JsonProperty("errors")
    public UpsertUser400ApplicationJsonErrors errors;
    public UpsertUser400ApplicationJson withErrors(UpsertUser400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public UpsertUser400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertUser400ApplicationJsonMeta meta;
    public UpsertUser400ApplicationJson withMeta(UpsertUser400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}