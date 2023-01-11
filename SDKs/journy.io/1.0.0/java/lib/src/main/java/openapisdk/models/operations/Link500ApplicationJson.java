package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link500ApplicationJson
 * The error message should specify what cause the error
**/
public class Link500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public Link500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link500ApplicationJsonMeta meta;
    public Link500ApplicationJson withMeta(Link500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}