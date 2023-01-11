package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceSampleRequestBodyAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsVarianceSampleRequestBodyAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}