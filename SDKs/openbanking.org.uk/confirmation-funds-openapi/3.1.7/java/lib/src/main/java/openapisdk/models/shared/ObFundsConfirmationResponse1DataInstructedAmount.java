package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObFundsConfirmationResponse1DataInstructedAmount
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
public class ObFundsConfirmationResponse1DataInstructedAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObFundsConfirmationResponse1DataInstructedAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObFundsConfirmationResponse1DataInstructedAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}