package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount
 * The amount of the recurring Standing Order
**/
public class ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}