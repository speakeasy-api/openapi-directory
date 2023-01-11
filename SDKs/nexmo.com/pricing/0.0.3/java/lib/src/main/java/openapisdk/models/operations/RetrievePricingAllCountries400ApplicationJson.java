package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrievePricingAllCountries400ApplicationJson {
    @JsonProperty("error_title")
    public String errorTitle;
    public RetrievePricingAllCountries400ApplicationJson withErrorTitle(String errorTitle) {
        this.errorTitle = errorTitle;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public RetrievePricingAllCountries400ApplicationJsonInvalidParameters invalidParameters;
    public RetrievePricingAllCountries400ApplicationJson withInvalidParameters(RetrievePricingAllCountries400ApplicationJsonInvalidParameters invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrievePricingAllCountries400ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}