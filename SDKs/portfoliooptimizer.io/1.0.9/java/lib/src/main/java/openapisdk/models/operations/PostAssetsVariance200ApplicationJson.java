package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVariance200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsVariance200ApplicationJsonAssets[] assets;
    public PostAssetsVariance200ApplicationJson withAssets(PostAssetsVariance200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}