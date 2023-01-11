package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountState
 * Indicates status of the account, such as whether the account has been verified by Google.
**/
public class AccountState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountStateStatusEnum status;
    public AccountState withStatus(AccountStateStatusEnum status) {
        this.status = status;
        return this;
    }
}