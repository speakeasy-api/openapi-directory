package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback")
    public String callback;
    public GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public openapisdk.models.shared.Meta meta;
    public GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson withMeta(openapisdk.models.shared.Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, Object>[] results;
    public GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson withResults(java.util.Map<String, Object>[] results) {
        this.results = results;
        return this;
    }
}