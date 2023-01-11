package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UndeleteServiceAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoredAccount")
    public ServiceAccount restoredAccount;
    public UndeleteServiceAccountResponse withRestoredAccount(ServiceAccount restoredAccount) {
        this.restoredAccount = restoredAccount;
        return this;
    }
}