package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVariance200ApplicationJsonAssets {
    @JsonProperty("assetVariance")
    public Double assetVariance;
    public PostAssetsVariance200ApplicationJsonAssets withAssetVariance(Double assetVariance) {
        this.assetVariance = assetVariance;
        return this;
    }
}