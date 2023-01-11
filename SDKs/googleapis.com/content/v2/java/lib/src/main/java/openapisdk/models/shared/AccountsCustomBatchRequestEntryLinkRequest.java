package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountsCustomBatchRequestEntryLinkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public AccountsCustomBatchRequestEntryLinkRequest withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public String linkType;
    public AccountsCustomBatchRequestEntryLinkRequest withLinkType(String linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAccountId")
    public String linkedAccountId;
    public AccountsCustomBatchRequestEntryLinkRequest withLinkedAccountId(String linkedAccountId) {
        this.linkedAccountId = linkedAccountId;
        return this;
    }
}