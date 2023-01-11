package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddHeldAccountResult
 * The status of each account creation, and the **HeldAccount**, if successful.
**/
public class AddHeldAccountResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public HeldAccount account;
    public AddHeldAccountResult withAccount(HeldAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public AddHeldAccountResult withStatus(Status status) {
        this.status = status;
        return this;
    }
}