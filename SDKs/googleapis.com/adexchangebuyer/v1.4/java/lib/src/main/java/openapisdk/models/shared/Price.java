package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Price {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public Double amountMicros;
    public Price withAmountMicros(Double amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Price withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedCpmMicros")
    public Double expectedCpmMicros;
    public Price withExpectedCpmMicros(Double expectedCpmMicros) {
        this.expectedCpmMicros = expectedCpmMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingType")
    public String pricingType;
    public Price withPricingType(String pricingType) {
        this.pricingType = pricingType;
        return this;
    }
}