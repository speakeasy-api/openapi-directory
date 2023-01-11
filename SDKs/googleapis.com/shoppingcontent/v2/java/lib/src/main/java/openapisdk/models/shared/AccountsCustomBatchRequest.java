package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountsCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public AccountsCustomBatchRequestEntry[] entries;
    public AccountsCustomBatchRequest withEntries(AccountsCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}