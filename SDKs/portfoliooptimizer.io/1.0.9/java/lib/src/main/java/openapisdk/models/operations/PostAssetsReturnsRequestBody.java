package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsRequestBody {
    @JsonProperty("assets")
    public PostAssetsReturnsRequestBodyAssets[] assets;
    public PostAssetsReturnsRequestBody withAssets(PostAssetsReturnsRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
}