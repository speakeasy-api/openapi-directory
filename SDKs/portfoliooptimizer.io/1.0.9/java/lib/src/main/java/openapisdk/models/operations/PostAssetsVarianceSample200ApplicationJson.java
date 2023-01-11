package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceSample200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsVarianceSample200ApplicationJsonAssets[] assets;
    public PostAssetsVarianceSample200ApplicationJson withAssets(PostAssetsVarianceSample200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}