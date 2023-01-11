package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccount400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class UpsertAccount400ApplicationJson {
    @JsonProperty("errors")
    public UpsertAccount400ApplicationJsonErrors errors;
    public UpsertAccount400ApplicationJson withErrors(UpsertAccount400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public UpsertAccount400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertAccount400ApplicationJsonMeta meta;
    public UpsertAccount400ApplicationJson withMeta(UpsertAccount400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}