package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios {
    @JsonProperty("portfolioValues")
    public Double[] portfolioValues;
    public PostPortfolioSimulationRebalancingDriftWeight200ApplicationJsonPortfolios withPortfolioValues(Double[] portfolioValues) {
        this.portfolioValues = portfolioValues;
        return this;
    }
}