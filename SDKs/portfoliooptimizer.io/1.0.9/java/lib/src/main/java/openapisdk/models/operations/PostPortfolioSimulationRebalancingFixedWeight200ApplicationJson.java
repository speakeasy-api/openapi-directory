package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson withPortfolios(PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}