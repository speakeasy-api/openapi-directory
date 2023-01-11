package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link401ApplicationJson
 * The error message should specify what cause the error
**/
public class Link401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public Link401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link401ApplicationJsonMeta meta;
    public Link401ApplicationJson withMeta(Link401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}