package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson withPortfolios(PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}