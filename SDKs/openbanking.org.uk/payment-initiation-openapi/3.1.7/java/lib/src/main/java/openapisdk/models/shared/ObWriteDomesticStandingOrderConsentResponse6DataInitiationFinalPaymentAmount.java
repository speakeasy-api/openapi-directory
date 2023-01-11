package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount
 * The amount of the final Standing Order
**/
public class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}