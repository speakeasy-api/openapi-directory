package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturn200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisReturn200ApplicationJson withPortfolios(PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}