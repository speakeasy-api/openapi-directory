package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrievePrefixPricing400ApplicationJson {
    @JsonProperty("error_title")
    public String errorTitle;
    public RetrievePrefixPricing400ApplicationJson withErrorTitle(String errorTitle) {
        this.errorTitle = errorTitle;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public RetrievePrefixPricing400ApplicationJsonInvalidParameters invalidParameters;
    public RetrievePrefixPricing400ApplicationJson withInvalidParameters(RetrievePrefixPricing400ApplicationJsonInvalidParameters invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public RetrievePrefixPricing400ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}