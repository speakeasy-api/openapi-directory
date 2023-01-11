package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisBeta200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisBeta200ApplicationJson withPortfolios(PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}