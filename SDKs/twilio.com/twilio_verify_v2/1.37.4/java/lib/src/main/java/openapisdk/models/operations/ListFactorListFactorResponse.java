package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFactorListFactorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("factors")
    public openapisdk.models.shared.VerifyV2ServiceEntityFactor[] factors;
    public ListFactorListFactorResponse withFactors(openapisdk.models.shared.VerifyV2ServiceEntityFactor[] factors) {
        this.factors = factors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFactorListFactorResponseMeta meta;
    public ListFactorListFactorResponse withMeta(ListFactorListFactorResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}