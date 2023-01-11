package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity403ApplicationJson
 * The error message should specify what cause the error
**/
public class GetValidity403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetValidity403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetValidity403ApplicationJsonMeta meta;
    public GetValidity403ApplicationJson withMeta(GetValidity403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}