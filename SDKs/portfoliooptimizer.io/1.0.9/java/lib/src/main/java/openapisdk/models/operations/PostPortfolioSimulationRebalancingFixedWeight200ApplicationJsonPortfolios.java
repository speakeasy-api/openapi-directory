package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios {
    @JsonProperty("portfolioValues")
    public Double[] portfolioValues;
    public PostPortfolioSimulationRebalancingFixedWeight200ApplicationJsonPortfolios withPortfolioValues(Double[] portfolioValues) {
        this.portfolioValues = portfolioValues;
        return this;
    }
}