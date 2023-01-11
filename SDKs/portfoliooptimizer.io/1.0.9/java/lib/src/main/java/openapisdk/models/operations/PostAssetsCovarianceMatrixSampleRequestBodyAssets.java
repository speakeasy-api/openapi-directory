package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixSampleRequestBodyAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsCovarianceMatrixSampleRequestBodyAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}