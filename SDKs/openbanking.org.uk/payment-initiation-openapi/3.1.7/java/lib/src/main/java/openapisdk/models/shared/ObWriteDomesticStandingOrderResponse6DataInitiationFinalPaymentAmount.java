package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount
 * The amount of the final Standing Order
**/
public class ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}