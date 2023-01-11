package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateLabelFromRateResponseBodyMonetaryValue
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
public class CreateLabelFromRateResponseBodyMonetaryValue {
    @JsonProperty("amount")
    public Double amount;
    public CreateLabelFromRateResponseBodyMonetaryValue withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public CreateLabelFromRateResponseBodyMonetaryValue withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}