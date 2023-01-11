package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
public class ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}