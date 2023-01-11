package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsAverage200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsReturnsAverage200ApplicationJsonAssets[] assets;
    public PostAssetsReturnsAverage200ApplicationJson withAssets(PostAssetsReturnsAverage200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}