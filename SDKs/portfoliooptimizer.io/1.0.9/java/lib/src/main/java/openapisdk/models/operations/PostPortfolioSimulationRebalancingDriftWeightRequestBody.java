package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingDriftWeightRequestBody {
    @JsonProperty("assets")
    public PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[] assets;
    public PostPortfolioSimulationRebalancingDriftWeightRequestBody withAssets(PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[] portfolios;
    public PostPortfolioSimulationRebalancingDriftWeightRequestBody withPortfolios(PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}