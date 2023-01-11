package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios {
    @JsonProperty("portfolioSharpeRatio")
    public Double portfolioSharpeRatio;
    public PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios withPortfolioSharpeRatio(Double portfolioSharpeRatio) {
        this.portfolioSharpeRatio = portfolioSharpeRatio;
        return this;
    }
}