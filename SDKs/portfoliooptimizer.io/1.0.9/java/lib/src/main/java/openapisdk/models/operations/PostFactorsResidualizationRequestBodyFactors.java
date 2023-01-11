package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFactorsResidualizationRequestBodyFactors {
    @JsonProperty("factorReturns")
    public Double[] factorReturns;
    public PostFactorsResidualizationRequestBodyFactors withFactorReturns(Double[] factorReturns) {
        this.factorReturns = factorReturns;
        return this;
    }
}