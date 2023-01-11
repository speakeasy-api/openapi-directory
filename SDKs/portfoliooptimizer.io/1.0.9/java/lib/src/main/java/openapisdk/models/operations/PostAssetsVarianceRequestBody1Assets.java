package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceRequestBody1Assets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsVarianceRequestBody1Assets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}