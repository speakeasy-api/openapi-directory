package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisSharpeRatio200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisSharpeRatio200ApplicationJson withPortfolios(PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}