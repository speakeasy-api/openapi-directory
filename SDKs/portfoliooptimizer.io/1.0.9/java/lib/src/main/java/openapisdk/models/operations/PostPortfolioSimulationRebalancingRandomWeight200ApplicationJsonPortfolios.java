package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios {
    @JsonProperty("portfolioValues")
    public Double[] portfolioValues;
    public PostPortfolioSimulationRebalancingRandomWeight200ApplicationJsonPortfolios withPortfolioValues(Double[] portfolioValues) {
        this.portfolioValues = portfolioValues;
        return this;
    }
}