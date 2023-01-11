package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceSampleRequestBody {
    @JsonProperty("assets")
    public PostAssetsVarianceSampleRequestBodyAssets[] assets;
    public PostAssetsVarianceSampleRequestBody withAssets(PostAssetsVarianceSampleRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
}