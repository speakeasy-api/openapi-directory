package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios {
    @JsonProperty("portfolioAlpha")
    public Double portfolioAlpha;
    public PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios withPortfolioAlpha(Double portfolioAlpha) {
        this.portfolioAlpha = portfolioAlpha;
        return this;
    }
}