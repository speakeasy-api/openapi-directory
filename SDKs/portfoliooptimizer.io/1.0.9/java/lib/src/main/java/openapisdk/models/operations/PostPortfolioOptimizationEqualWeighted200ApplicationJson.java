package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioOptimizationEqualWeighted200ApplicationJson {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioOptimizationEqualWeighted200ApplicationJson withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}