package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDrawdowns200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisDrawdowns200ApplicationJson withPortfolios(PostPortfolioAnalysisDrawdowns200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}