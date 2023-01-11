package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountstatusesCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public AccountstatusesCustomBatchResponseEntry[] entries;
    public AccountstatusesCustomBatchResponse withEntries(AccountstatusesCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountstatusesCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}