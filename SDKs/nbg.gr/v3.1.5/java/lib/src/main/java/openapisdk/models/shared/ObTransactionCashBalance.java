package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObTransactionCashBalance
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
public class ObTransactionCashBalance {
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObTransactionCashBalance withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("CreditDebitIndicator")
    public ObCreditDebitCodeEnum creditDebitIndicator;
    public ObTransactionCashBalance withCreditDebitIndicator(ObCreditDebitCodeEnum creditDebitIndicator) {
        this.creditDebitIndicator = creditDebitIndicator;
        return this;
    }
    @JsonProperty("Type")
    public ObBalanceType1CodeEnum type;
    public ObTransactionCashBalance withType(ObBalanceType1CodeEnum type) {
        this.type = type;
        return this;
    }
}