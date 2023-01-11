package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVarianceSample200ApplicationJsonAssets {
    @JsonProperty("assetVariance")
    public Double assetVariance;
    public PostAssetsVarianceSample200ApplicationJsonAssets withAssetVariance(Double assetVariance) {
        this.assetVariance = assetVariance;
        return this;
    }
}