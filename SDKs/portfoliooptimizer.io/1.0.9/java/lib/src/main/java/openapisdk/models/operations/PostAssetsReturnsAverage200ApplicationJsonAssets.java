package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsReturnsAverage200ApplicationJsonAssets {
    @JsonProperty("assetAverageReturn")
    public Double assetAverageReturn;
    public PostAssetsReturnsAverage200ApplicationJsonAssets withAssetAverageReturn(Double assetAverageReturn) {
        this.assetAverageReturn = assetAverageReturn;
        return this;
    }
}