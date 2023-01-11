package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrievePricingAllCountries400ApplicationJsonInvalidParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RetrievePricingAllCountries400ApplicationJsonInvalidParameters withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;
    public RetrievePricingAllCountries400ApplicationJsonInvalidParameters withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
}