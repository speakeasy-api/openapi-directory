package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount
 * The amount of the first Standing Order
**/
public class ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}