package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObActiveOrHistoricCurrencyAndAmount
 * Amount of money associated with the charge type.
**/
public class ObActiveOrHistoricCurrencyAndAmount {
    @JsonProperty("Amount")
    public String amount;
    public ObActiveOrHistoricCurrencyAndAmount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObActiveOrHistoricCurrencyAndAmount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}