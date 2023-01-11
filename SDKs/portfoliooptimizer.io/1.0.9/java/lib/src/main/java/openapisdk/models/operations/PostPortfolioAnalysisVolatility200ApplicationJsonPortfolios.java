package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios {
    @JsonProperty("portfolioVolatility")
    public Double portfolioVolatility;
    public PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios withPortfolioVolatility(Double portfolioVolatility) {
        this.portfolioVolatility = portfolioVolatility;
        return this;
    }
}