package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCorrelationMatrixRequestBody1Assets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsCorrelationMatrixRequestBody1Assets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}