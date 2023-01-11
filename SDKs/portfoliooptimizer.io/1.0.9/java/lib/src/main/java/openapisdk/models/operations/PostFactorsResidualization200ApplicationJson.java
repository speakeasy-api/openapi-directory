package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFactorsResidualization200ApplicationJson {
    @JsonProperty("residualizedFactorReturns")
    public Double[] residualizedFactorReturns;
    public PostFactorsResidualization200ApplicationJson withResidualizedFactorReturns(Double[] residualizedFactorReturns) {
        this.residualizedFactorReturns = residualizedFactorReturns;
        return this;
    }
}