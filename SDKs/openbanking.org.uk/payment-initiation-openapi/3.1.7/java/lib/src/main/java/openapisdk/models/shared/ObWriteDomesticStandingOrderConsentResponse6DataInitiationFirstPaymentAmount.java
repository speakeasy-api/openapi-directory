package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount
 * The amount of the first Standing Order
**/
public class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}