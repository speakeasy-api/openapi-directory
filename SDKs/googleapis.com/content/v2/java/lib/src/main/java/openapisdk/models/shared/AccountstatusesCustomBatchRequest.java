package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountstatusesCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public AccountstatusesCustomBatchRequestEntry[] entries;
    public AccountstatusesCustomBatchRequest withEntries(AccountstatusesCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}