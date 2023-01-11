package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisTrackingError200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisTrackingError200ApplicationJson withPortfolios(PostPortfolioAnalysisTrackingError200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}