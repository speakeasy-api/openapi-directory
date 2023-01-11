package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class GetTrackingSnippet400ApplicationJson {
    @JsonProperty("errors")
    public GetTrackingSnippet400ApplicationJsonErrors errors;
    public GetTrackingSnippet400ApplicationJson withErrors(GetTrackingSnippet400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet400ApplicationJsonMeta meta;
    public GetTrackingSnippet400ApplicationJson withMeta(GetTrackingSnippet400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}