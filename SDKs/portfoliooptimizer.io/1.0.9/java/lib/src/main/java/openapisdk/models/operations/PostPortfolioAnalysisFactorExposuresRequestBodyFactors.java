package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostPortfolioAnalysisFactorExposuresRequestBodyFactors {
    @JsonProperty("factorReturns")
    public Double[] factorReturns;
    public PostPortfolioAnalysisFactorExposuresRequestBodyFactors withFactorReturns(Double[] factorReturns) {
        this.factorReturns = factorReturns;
        return this;
    }
}