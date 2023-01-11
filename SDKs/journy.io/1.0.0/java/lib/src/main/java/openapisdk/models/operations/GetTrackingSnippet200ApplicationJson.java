package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet200ApplicationJson
 * The basic response containing the unique ID of the request and the response status
**/
public class GetTrackingSnippet200ApplicationJson {
    @JsonProperty("data")
    public GetTrackingSnippet200ApplicationJsonData data;
    public GetTrackingSnippet200ApplicationJson withData(GetTrackingSnippet200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetTrackingSnippet200ApplicationJsonMeta meta;
    public GetTrackingSnippet200ApplicationJson withMeta(GetTrackingSnippet200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}