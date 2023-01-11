package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsCovarianceMatrixRequestBody1Assets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostAssetsCovarianceMatrixRequestBody1Assets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}