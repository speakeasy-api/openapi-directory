package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrievePricingCountry401ApplicationJson {
    @JsonProperty("code")
    public String code;
    public RetrievePricingCountry401ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public RetrievePricingCountry401ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("error-code-label")
    public String errorCodeLabel;
    public RetrievePricingCountry401ApplicationJson withErrorCodeLabel(String errorCodeLabel) {
        this.errorCodeLabel = errorCodeLabel;
        return this;
    }
}