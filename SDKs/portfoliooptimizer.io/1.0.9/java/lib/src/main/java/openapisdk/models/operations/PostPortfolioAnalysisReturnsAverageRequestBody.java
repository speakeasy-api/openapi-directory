package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisReturnsAverageRequestBody {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisReturnsAverageRequestBody withPortfolios(PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}