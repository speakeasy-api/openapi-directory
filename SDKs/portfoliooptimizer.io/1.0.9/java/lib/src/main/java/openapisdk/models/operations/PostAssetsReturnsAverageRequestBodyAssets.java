package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsAverageRequestBodyAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsReturnsAverageRequestBodyAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}