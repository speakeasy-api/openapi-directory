package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsCustomBatchRequestEntry
 * A batch entry encoding a single non-batch accounts request.
**/
public class AccountsCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account account;
    public AccountsCustomBatchRequestEntry withAccount(Account account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccountsCustomBatchRequestEntry withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public AccountsCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public AccountsCustomBatchRequestEntry withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelIds")
    public String[] labelIds;
    public AccountsCustomBatchRequestEntry withLabelIds(String[] labelIds) {
        this.labelIds = labelIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkRequest")
    public AccountsCustomBatchRequestEntryLinkRequest linkRequest;
    public AccountsCustomBatchRequestEntry withLinkRequest(AccountsCustomBatchRequestEntryLinkRequest linkRequest) {
        this.linkRequest = linkRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public AccountsCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public AccountsCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overwrite")
    public Boolean overwrite;
    public AccountsCustomBatchRequestEntry withOverwrite(Boolean overwrite) {
        this.overwrite = overwrite;
        return this;
    }
}