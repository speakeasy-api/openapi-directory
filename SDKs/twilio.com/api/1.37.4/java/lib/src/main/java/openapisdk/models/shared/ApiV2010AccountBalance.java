package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountBalance withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public String balance;
    public ApiV2010AccountBalance withBalance(String balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ApiV2010AccountBalance withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}