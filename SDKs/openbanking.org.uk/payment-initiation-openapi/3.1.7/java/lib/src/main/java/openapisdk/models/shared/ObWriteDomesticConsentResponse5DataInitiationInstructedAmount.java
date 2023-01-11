package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticConsentResponse5DataInitiationInstructedAmount
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
public class ObWriteDomesticConsentResponse5DataInitiationInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticConsentResponse5DataInitiationInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticConsentResponse5DataInitiationInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}