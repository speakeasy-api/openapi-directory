package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddFundsToCarrierResponseBodyMonetaryValue
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
public class AddFundsToCarrierResponseBodyMonetaryValue {
    @JsonProperty("amount")
    public Double amount;
    public AddFundsToCarrierResponseBodyMonetaryValue withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public AddFundsToCarrierResponseBodyMonetaryValue withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}