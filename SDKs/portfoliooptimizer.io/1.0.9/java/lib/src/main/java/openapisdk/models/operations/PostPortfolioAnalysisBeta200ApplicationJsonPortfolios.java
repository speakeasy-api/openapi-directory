package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisBeta200ApplicationJsonPortfolios {
    @JsonProperty("portfolioBeta")
    public Double portfolioBeta;
    public PostPortfolioAnalysisBeta200ApplicationJsonPortfolios withPortfolioBeta(Double portfolioBeta) {
        this.portfolioBeta = portfolioBeta;
        return this;
    }
}