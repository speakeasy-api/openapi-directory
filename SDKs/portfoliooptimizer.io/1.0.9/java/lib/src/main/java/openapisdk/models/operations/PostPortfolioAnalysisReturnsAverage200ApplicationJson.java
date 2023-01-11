package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturnsAverage200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisReturnsAverage200ApplicationJson withPortfolios(PostPortfolioAnalysisReturnsAverage200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}