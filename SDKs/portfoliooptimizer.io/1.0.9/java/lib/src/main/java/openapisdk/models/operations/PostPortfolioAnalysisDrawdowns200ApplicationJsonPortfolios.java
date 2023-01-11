package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios {
    @JsonProperty("portfolioDrawdowns")
    public Double[] portfolioDrawdowns;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios withPortfolioDrawdowns(Double[] portfolioDrawdowns) {
        this.portfolioDrawdowns = portfolioDrawdowns;
        return this;
    }
    @JsonProperty("portfolioWorstDrawdowns")
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns[] portfolioWorstDrawdowns;
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios withPortfolioWorstDrawdowns(PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfoliosPortfolioWorstDrawdowns[] portfolioWorstDrawdowns) {
        this.portfolioWorstDrawdowns = portfolioWorstDrawdowns;
        return this;
    }
}