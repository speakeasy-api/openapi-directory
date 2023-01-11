package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}