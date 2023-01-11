package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link403ApplicationJson
 * The error message should specify what cause the error
**/
public class Link403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public Link403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link403ApplicationJsonMeta meta;
    public Link403ApplicationJson withMeta(Link403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}