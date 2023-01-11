package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
 * The amount of the recurring Standing Order
**/
public class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}