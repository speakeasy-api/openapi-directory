package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class Link400ApplicationJson {
    @JsonProperty("errors")
    public Link400ApplicationJsonErrors errors;
    public Link400ApplicationJson withErrors(Link400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Link400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link400ApplicationJsonMeta meta;
    public Link400ApplicationJson withMeta(Link400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}