package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity429ApplicationJson
 * The error message should specify what cause the error
**/
public class GetValidity429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetValidity429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetValidity429ApplicationJsonMeta meta;
    public GetValidity429ApplicationJson withMeta(GetValidity429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}