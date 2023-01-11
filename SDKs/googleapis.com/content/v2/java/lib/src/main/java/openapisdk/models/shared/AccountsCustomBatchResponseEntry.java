package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsCustomBatchResponseEntry
 * A batch entry encoding a single non-batch accounts response.
**/
public class AccountsCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account account;
    public AccountsCustomBatchResponseEntry withAccount(Account account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public AccountsCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public AccountsCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountsCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkStatus")
    public String linkStatus;
    public AccountsCustomBatchResponseEntry withLinkStatus(String linkStatus) {
        this.linkStatus = linkStatus;
        return this;
    }
}