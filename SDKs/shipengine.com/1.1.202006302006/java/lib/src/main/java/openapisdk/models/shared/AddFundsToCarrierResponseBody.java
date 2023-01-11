package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddFundsToCarrierResponseBody
 * The current balance of the requested carrier account
**/
public class AddFundsToCarrierResponseBody {
    @JsonProperty("balance")
    public AddFundsToCarrierResponseBodyMonetaryValue balance;
    public AddFundsToCarrierResponseBody withBalance(AddFundsToCarrierResponseBodyMonetaryValue balance) {
        this.balance = balance;
        return this;
    }
}