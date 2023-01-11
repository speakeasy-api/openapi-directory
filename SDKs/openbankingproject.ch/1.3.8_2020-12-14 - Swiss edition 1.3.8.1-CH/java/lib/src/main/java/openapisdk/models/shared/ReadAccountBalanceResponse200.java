package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadAccountBalanceResponse200
 * Body of the response for a successful read balance for an account request.
**/
public class ReadAccountBalanceResponse200 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public AccountReference16Ch account;
    public ReadAccountBalanceResponse200 withAccount(AccountReference16Ch account) {
        this.account = account;
        return this;
    }
    @JsonProperty("balances")
    public Balance[] balances;
    public ReadAccountBalanceResponse200 withBalances(Balance[] balances) {
        this.balances = balances;
        return this;
    }
}