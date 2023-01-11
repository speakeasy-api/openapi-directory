package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios {
    @JsonProperty("portfolioAverageReturn")
    public Double portfolioAverageReturn;
    public PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios withPortfolioAverageReturn(Double portfolioAverageReturn) {
        this.portfolioAverageReturn = portfolioAverageReturn;
        return this;
    }
}