package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingFixedWeightRequestBody {
    @JsonProperty("assets")
    public PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[] assets;
    public PostPortfolioSimulationRebalancingFixedWeightRequestBody withAssets(PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[] portfolios;
    public PostPortfolioSimulationRebalancingFixedWeightRequestBody withPortfolios(PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}