package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet404ApplicationJson
 * The error message should specify what cause the error
**/
public class GetTrackingSnippet404ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet404ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet404ApplicationJsonMeta meta;
    public GetTrackingSnippet404ApplicationJson withMeta(GetTrackingSnippet404ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}