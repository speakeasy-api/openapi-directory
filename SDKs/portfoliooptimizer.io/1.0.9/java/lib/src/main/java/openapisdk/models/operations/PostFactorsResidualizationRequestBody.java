package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFactorsResidualizationRequestBody {
    @JsonProperty("factors")
    public PostFactorsResidualizationRequestBodyFactors[] factors;
    public PostFactorsResidualizationRequestBody withFactors(PostFactorsResidualizationRequestBodyFactors[] factors) {
        this.factors = factors;
        return this;
    }
    @JsonProperty("residualizedFactor")
    public Long residualizedFactor;
    public PostFactorsResidualizationRequestBody withResidualizedFactor(Long residualizedFactor) {
        this.residualizedFactor = residualizedFactor;
        return this;
    }
}