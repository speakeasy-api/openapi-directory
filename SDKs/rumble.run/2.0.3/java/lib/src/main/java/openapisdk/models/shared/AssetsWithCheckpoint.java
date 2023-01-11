package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssetsWithCheckpoint {
    @JsonProperty("assets")
    public Asset[] assets;
    public AssetsWithCheckpoint withAssets(Asset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("since")
    public Long since;
    public AssetsWithCheckpoint withSince(Long since) {
        this.since = since;
        return this;
    }
}