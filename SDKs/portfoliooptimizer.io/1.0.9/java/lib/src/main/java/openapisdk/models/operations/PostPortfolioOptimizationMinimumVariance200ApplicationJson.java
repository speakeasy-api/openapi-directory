package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationMinimumVariance200ApplicationJson {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioOptimizationMinimumVariance200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}