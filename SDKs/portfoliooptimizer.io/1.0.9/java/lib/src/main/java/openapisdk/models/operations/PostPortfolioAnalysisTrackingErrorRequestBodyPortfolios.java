package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios {
    @JsonProperty("portfolioReturns")
    public Double[] portfolioReturns;
    public PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios withPortfolioReturns(Double[] portfolioReturns) {
        this.portfolioReturns = portfolioReturns;
        return this;
    }
}