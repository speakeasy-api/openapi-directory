package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios {
    @JsonProperty("portfolioValues")
    public Double[] portfolioValues;
    public PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios withPortfolioValues(Double[] portfolioValues) {
        this.portfolioValues = portfolioValues;
        return this;
    }
}