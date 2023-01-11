package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity401ApplicationJson
 * The error message should specify what cause the error
**/
public class GetValidity401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetValidity401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetValidity401ApplicationJsonMeta meta;
    public GetValidity401ApplicationJson withMeta(GetValidity401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}