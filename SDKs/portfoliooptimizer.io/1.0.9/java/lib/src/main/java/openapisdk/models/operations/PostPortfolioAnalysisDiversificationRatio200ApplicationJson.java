package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDiversificationRatio200ApplicationJson {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios[] portfolios;
    public PostPortfolioAnalysisDiversificationRatio200ApplicationJson withPortfolios(PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}