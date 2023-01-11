package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link429ApplicationJson
 * The error message should specify what cause the error
**/
public class Link429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public Link429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public Link429ApplicationJsonMeta meta;
    public Link429ApplicationJson withMeta(Link429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}