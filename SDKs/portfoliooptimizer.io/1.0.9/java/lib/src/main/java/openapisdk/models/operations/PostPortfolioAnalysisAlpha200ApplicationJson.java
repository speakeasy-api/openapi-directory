package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisAlpha200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisAlpha200ApplicationJson withPortfolios(PostPortfolioAnalysisAlpha200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}