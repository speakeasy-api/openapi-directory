package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Rev.ai Account Model
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance_seconds")
    public Long balanceSeconds;
    public Account withBalanceSeconds(Long balanceSeconds) {
        this.balanceSeconds = balanceSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Account withEmail(String email) {
        this.email = email;
        return this;
    }
}