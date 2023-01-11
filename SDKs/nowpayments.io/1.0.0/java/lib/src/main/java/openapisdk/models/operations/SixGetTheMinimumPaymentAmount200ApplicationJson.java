package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SixGetTheMinimumPaymentAmount200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_from")
    public String currencyFrom;
    public SixGetTheMinimumPaymentAmount200ApplicationJson withCurrencyFrom(String currencyFrom) {
        this.currencyFrom = currencyFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_to")
    public String currencyTo;
    public SixGetTheMinimumPaymentAmount200ApplicationJson withCurrencyTo(String currencyTo) {
        this.currencyTo = currencyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_amount")
    public Double minAmount;
    public SixGetTheMinimumPaymentAmount200ApplicationJson withMinAmount(Double minAmount) {
        this.minAmount = minAmount;
        return this;
    }
}