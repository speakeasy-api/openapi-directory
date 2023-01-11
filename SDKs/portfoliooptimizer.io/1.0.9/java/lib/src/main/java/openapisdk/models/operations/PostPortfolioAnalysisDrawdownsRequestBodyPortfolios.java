package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios {
    @JsonProperty("portfolioValues")
    public Double[] portfolioValues;
    public PostPortfolioAnalysisDrawdownsRequestBodyPortfolios withPortfolioValues(Double[] portfolioValues) {
        this.portfolioValues = portfolioValues;
        return this;
    }
}