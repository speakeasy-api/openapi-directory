package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ThreeGetEstimatedPrice200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount_from")
    public Double amountFrom;
    public ThreeGetEstimatedPrice200ApplicationJson withAmountFrom(Double amountFrom) {
        this.amountFrom = amountFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_from")
    public String currencyFrom;
    public ThreeGetEstimatedPrice200ApplicationJson withCurrencyFrom(String currencyFrom) {
        this.currencyFrom = currencyFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_to")
    public String currencyTo;
    public ThreeGetEstimatedPrice200ApplicationJson withCurrencyTo(String currencyTo) {
        this.currencyTo = currencyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_amount")
    public Double estimatedAmount;
    public ThreeGetEstimatedPrice200ApplicationJson withEstimatedAmount(Double estimatedAmount) {
        this.estimatedAmount = estimatedAmount;
        return this;
    }
}