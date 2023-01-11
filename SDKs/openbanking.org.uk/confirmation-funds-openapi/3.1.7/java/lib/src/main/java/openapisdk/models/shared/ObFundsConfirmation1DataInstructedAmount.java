package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObFundsConfirmation1DataInstructedAmount
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
public class ObFundsConfirmation1DataInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObFundsConfirmation1DataInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObFundsConfirmation1DataInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}