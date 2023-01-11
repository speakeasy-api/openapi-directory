package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccount500ApplicationJson
 * The error message should specify what cause the error
**/
public class UpsertAccount500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertAccount500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertAccount500ApplicationJsonMeta meta;
    public UpsertAccount500ApplicationJson withMeta(UpsertAccount500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}