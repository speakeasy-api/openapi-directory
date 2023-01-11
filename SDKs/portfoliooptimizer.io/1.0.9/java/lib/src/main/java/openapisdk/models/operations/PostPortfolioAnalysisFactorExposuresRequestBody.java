package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPortfolioAnalysisFactorExposuresRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("factors")
    public PostPortfolioAnalysisFactorExposuresRequestBodyFactors[] factors;
    public PostPortfolioAnalysisFactorExposuresRequestBody withFactors(PostPortfolioAnalysisFactorExposuresRequestBodyFactors[] factors) {
        this.factors = factors;
        return this;
    }
    @JsonProperty("portfolios")
    public PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios[] portfolios;
    public PostPortfolioAnalysisFactorExposuresRequestBody withPortfolios(PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios[] portfolios) {
        this.portfolios = portfolios;
        return this;
    }
}