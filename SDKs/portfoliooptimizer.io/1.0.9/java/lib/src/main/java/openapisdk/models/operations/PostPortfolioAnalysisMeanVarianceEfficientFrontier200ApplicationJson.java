package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson withPortfolios(PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}