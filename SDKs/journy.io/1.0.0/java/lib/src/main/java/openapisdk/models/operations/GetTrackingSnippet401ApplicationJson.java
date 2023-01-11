package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet401ApplicationJson
 * The error message should specify what cause the error
**/
public class GetTrackingSnippet401ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet401ApplicationJsonMeta meta;
    public GetTrackingSnippet401ApplicationJson withMeta(GetTrackingSnippet401ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}