package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet403ApplicationJson
 * The error message should specify what cause the error
**/
public class GetTrackingSnippet403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet403ApplicationJsonMeta meta;
    public GetTrackingSnippet403ApplicationJson withMeta(GetTrackingSnippet403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}