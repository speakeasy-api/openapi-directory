package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount
 * The amount of the first Standing Order
**/
public class ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}