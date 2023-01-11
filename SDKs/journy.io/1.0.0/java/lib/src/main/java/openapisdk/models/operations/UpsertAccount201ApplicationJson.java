package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccount201ApplicationJson
 * The object was created
**/
public class UpsertAccount201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public UpsertAccount201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public UpsertAccount201ApplicationJsonMeta meta;
    public UpsertAccount201ApplicationJson withMeta(UpsertAccount201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}