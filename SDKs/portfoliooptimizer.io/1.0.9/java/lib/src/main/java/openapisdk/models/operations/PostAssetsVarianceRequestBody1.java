package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceRequestBody1 {
    @JsonProperty("assets")
    public PostAssetsVarianceRequestBody1Assets[] assets;
    public PostAssetsVarianceRequestBody1 withAssets(PostAssetsVarianceRequestBody1Assets[] assets) {
        this.assets = assets;
        return this;
    }
}