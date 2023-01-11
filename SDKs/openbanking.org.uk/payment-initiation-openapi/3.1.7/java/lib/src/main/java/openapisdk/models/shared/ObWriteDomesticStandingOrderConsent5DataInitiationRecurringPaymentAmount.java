package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount
 * The amount of the recurring Standing Order
**/
public class ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}