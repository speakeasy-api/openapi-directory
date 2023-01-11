package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceRequestBody3 {
    @JsonProperty("assets")
    public PostAssetsVarianceRequestBody3Assets[] assets;
    public PostAssetsVarianceRequestBody3 withAssets(PostAssetsVarianceRequestBody3Assets[] assets) {
        this.assets = assets;
        return this;
    }
}