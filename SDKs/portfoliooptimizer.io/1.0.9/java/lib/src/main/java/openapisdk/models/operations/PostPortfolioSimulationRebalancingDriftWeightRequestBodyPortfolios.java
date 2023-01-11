package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios {
    @JsonProperty("assetsWeights")
    public Double[] assetsWeights;
    public PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios withAssetsWeights(Double[] assetsWeights) {
        this.assetsWeights = assetsWeights;
        return this;
    }
}