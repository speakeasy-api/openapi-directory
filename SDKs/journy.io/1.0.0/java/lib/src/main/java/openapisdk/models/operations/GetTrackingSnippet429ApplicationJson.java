package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet429ApplicationJson
 * The error message should specify what cause the error
**/
public class GetTrackingSnippet429ApplicationJson {
    @JsonProperty("message")
    public String message;
    public GetTrackingSnippet429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet429ApplicationJsonMeta meta;
    public GetTrackingSnippet429ApplicationJson withMeta(GetTrackingSnippet429ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}