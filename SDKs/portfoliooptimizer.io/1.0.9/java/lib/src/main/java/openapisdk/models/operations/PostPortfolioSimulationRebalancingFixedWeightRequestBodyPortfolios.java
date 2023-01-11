package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}