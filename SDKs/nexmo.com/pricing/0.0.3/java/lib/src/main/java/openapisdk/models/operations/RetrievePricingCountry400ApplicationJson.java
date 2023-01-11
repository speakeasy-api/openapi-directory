package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrievePricingCountry400ApplicationJson {
    @JsonProperty("error_title")
    public String errorTitle;
    public RetrievePricingCountry400ApplicationJson withErrorTitle(String errorTitle) {
        this.errorTitle = errorTitle;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public RetrievePricingCountry400ApplicationJsonInvalidParameters invalidParameters;
    public RetrievePricingCountry400ApplicationJson withInvalidParameters(RetrievePricingCountry400ApplicationJsonInvalidParameters invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrievePricingCountry400ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}