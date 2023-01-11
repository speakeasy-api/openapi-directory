package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson withPortfolios(PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}