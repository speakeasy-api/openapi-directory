package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisFactorExposures200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisFactorExposures200ApplicationJson withPortfolios(PostPortfolioAnalysisFactorExposures200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}