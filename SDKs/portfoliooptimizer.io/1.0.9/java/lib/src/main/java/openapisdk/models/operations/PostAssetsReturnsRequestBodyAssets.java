package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsRequestBodyAssets {
    @JsonProperty("assetPrices")
    public Double[] assetPrices;
    public PostAssetsReturnsRequestBodyAssets withAssetPrices(Double[] assetPrices) {
        this.assetPrices = assetPrices;
        return this;
    }
}