package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturns200ApplicationJsonAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsReturns200ApplicationJsonAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}