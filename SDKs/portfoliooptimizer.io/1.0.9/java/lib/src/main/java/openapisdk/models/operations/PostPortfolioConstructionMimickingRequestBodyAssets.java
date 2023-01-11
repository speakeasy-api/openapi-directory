package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioConstructionMimickingRequestBodyAssets {
    @JsonProperty("assetReturns")
    public Double[] assetReturns;
    public PostPortfolioConstructionMimickingRequestBodyAssets withAssetReturns(Double[] assetReturns) {
        this.assetReturns = assetReturns;
        return this;
    }
}