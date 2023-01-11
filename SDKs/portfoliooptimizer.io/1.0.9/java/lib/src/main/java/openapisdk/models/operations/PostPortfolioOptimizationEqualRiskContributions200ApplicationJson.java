package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationEqualRiskContributions200ApplicationJson {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioOptimizationEqualRiskContributions200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}