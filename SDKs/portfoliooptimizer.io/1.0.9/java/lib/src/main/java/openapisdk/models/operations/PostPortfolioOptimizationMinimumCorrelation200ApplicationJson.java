package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationMinimumCorrelation200ApplicationJson {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioOptimizationMinimumCorrelation200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}