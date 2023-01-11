package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link201ApplicationJson
 * The object was created
**/
public class Link201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public Link201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link201ApplicationJsonMeta meta;
    public Link201ApplicationJson withMeta(Link201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}