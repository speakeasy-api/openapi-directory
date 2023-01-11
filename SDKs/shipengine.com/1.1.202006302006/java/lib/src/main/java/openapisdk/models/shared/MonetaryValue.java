package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MonetaryValue
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
public class MonetaryValue {
    @JsonProperty("amount")
    public Double amount;
    public MonetaryValue withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public MonetaryValue withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}