package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisContributionsReturn200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisContributionsReturn200ApplicationJson withPortfolios(PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}