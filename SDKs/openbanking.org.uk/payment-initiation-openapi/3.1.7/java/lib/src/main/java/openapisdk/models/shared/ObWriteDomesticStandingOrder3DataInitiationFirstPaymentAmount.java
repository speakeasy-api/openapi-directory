package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
 * The amount of the first Standing Order
**/
public class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}