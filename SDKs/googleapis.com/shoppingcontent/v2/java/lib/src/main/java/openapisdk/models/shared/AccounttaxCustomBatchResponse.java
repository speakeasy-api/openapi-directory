package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccounttaxCustomBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public AccounttaxCustomBatchResponseEntry[] entries;
    public AccounttaxCustomBatchResponse withEntries(AccounttaxCustomBatchResponseEntry[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccounttaxCustomBatchResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}