package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationInverseVarianceWeightedRequestBody {
    @JsonProperty("assets")
    public Long assets;
    public PostPortfolioOptimizationInverseVarianceWeightedRequestBody withAssets(Long assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("assetsVariances")
    public Double[] assetsVariances;
    public PostPortfolioOptimizationInverseVarianceWeightedRequestBody withAssetsVariances(Double[] assetsVariances) {
        this.assetsVariances = assetsVariances;
        return this;
    }
}