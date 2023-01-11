package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisVolatility200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisVolatility200ApplicationJson withPortfolios(PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}