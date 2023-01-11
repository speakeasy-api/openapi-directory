package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturns200ApplicationJson {
    @JsonProperty("assets")
    public PostAssetsReturns200ApplicationJsonAssets[] assets;
    public PostAssetsReturns200ApplicationJson withAssets(PostAssetsReturns200ApplicationJsonAssets[] assets) {
        this.assets = assets;
        return this;
    }
}