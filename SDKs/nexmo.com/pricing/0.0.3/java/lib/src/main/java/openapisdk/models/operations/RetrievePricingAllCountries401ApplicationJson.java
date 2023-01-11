package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RetrievePricingAllCountries401ApplicationJson {
    @JsonProperty("code")
    public String code;
    public RetrievePricingAllCountries401ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public RetrievePricingAllCountries401ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("error-code-label")
    public String errorCodeLabel;
    public RetrievePricingAllCountries401ApplicationJson withErrorCodeLabel(String errorCodeLabel) {
        this.errorCodeLabel = errorCodeLabel;
        return this;
    }
}