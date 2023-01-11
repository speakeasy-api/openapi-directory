package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet500ApplicationJson
 * The error message should specify what cause the error
**/
public class GetTrackingSnippet500ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet500ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet500ApplicationJsonMeta meta;
    public GetTrackingSnippet500ApplicationJson withMeta(GetTrackingSnippet500ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}