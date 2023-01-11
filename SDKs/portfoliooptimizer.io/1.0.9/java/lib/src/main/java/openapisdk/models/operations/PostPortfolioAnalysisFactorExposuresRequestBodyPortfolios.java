package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios {
    @JsonProperty("portfolioReturns")
    public Double[] portfolioReturns;
    public PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios withPortfolioReturns(Double[] portfolioReturns) {
        this.portfolioReturns = portfolioReturns;
        return this;
    }
}