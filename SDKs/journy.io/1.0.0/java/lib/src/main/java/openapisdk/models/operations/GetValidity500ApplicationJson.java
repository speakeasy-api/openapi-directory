package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity500ApplicationJson
 * The error message should specify what cause the error
**/
public class GetValidity500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetValidity500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetValidity500ApplicationJsonMeta meta;
    public GetValidity500ApplicationJson withMeta(GetValidity500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}