package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccounttaxCustomBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public AccounttaxCustomBatchRequestEntry[] entries;
    public AccounttaxCustomBatchRequest withEntries(AccounttaxCustomBatchRequestEntry[] entries) {
        this.entries = entries;
        return this;
    }
}