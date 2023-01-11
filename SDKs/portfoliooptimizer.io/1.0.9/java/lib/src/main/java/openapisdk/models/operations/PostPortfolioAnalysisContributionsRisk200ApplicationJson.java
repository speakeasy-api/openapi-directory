package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisContributionsRisk200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisContributionsRisk200ApplicationJson withPortfolios(PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}