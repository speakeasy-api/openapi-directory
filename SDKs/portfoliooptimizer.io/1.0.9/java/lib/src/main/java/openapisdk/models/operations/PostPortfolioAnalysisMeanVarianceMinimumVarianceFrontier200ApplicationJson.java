package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson withPortfolios(PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}