package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticResponse5DataInitiationInstructedAmount
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
public class ObWriteDomesticResponse5DataInitiationInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticResponse5DataInitiationInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticResponse5DataInitiationInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}