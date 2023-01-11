package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssetTags {
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public AssetTags withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}