package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateReturnLabelResponseBodyMonetaryValue
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
public class CreateReturnLabelResponseBodyMonetaryValue {
    @JsonProperty("amount")
    public Double amount;
    public CreateReturnLabelResponseBodyMonetaryValue withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public CreateReturnLabelResponseBodyMonetaryValue withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}