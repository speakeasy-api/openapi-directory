package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios {
    @JsonProperty("portfolioDiversificationRatio")
    public Double portfolioDiversificationRatio;
    public PostPortfolioAnalysisDiversificationRatio200ApplicationJsonPortfolios withPortfolioDiversificationRatio(Double portfolioDiversificationRatio) {
        this.portfolioDiversificationRatio = portfolioDiversificationRatio;
        return this;
    }
}