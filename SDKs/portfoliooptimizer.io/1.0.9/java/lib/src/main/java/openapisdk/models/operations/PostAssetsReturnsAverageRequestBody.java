package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsAverageRequestBody {
    @JsonProperty("assets")
    public PostAssetsReturnsAverageRequestBodyAssets[] assets;
    public PostAssetsReturnsAverageRequestBody withAssets(PostAssetsReturnsAverageRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
}