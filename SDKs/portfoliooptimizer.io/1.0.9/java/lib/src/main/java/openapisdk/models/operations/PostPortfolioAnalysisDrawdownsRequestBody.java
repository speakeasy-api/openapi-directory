package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisDrawdownsRequestBody {
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisDrawdownsRequestBody withPortfolios(PostPortfolioAnalysisDrawdownsRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}