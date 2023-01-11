package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
 * The amount of the final Standing Order
**/
public class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}