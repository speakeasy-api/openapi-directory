package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RateMonetaryValue
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
public class RateMonetaryValue {
    @JsonProperty("amount")
    public Double amount;
    public RateMonetaryValue withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public RateMonetaryValue withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}