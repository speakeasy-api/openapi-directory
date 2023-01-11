package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios {
    @JsonProperty("portfolioReturn")
    public Double portfolioReturn;
    public PostPortfolioAnalysisReturn200ApplicationJsonPortfolios withPortfolioReturn(Double portfolioReturn) {
        this.portfolioReturn = portfolioReturn;
        return this;
    }
}