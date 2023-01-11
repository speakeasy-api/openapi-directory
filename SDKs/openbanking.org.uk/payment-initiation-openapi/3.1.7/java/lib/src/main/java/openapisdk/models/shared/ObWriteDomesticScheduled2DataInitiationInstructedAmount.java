package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticScheduled2DataInitiationInstructedAmount
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
public class ObWriteDomesticScheduled2DataInitiationInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObWriteDomesticScheduled2DataInitiationInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObWriteDomesticScheduled2DataInitiationInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}