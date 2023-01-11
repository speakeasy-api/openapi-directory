package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount
 * The amount of the recurring Standing Order
**/
public class ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}