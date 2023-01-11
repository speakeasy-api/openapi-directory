package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios {
    @JsonProperty("portfolioTrackingError")
    public Double portfolioTrackingError;
    public PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios withPortfolioTrackingError(Double portfolioTrackingError) {
        this.portfolioTrackingError = portfolioTrackingError;
        return this;
    }
}