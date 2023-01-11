package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios {
    @JsonProperty("portfolioAlpha")
    public Double portfolioAlpha;
    public PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios withPortfolioAlpha(Double portfolioAlpha) {
        this.portfolioAlpha = portfolioAlpha;
        return this;
    }
    @JsonProperty("portfolioBetas")
    public Double[] portfolioBetas;
    public PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios withPortfolioBetas(Double[] portfolioBetas) {
        this.portfolioBetas = portfolioBetas;
        return this;
    }
    @JsonProperty("portfolioRSquared")
    public Double portfolioRSquared;
    public PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios withPortfolioRSquared(Double portfolioRSquared) {
        this.portfolioRSquared = portfolioRSquared;
        return this;
    }
}