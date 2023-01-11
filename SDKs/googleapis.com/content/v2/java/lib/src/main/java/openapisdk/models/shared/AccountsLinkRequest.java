package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountsLinkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public AccountsLinkRequest withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public String linkType;
    public AccountsLinkRequest withLinkType(String linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAccountId")
    public String linkedAccountId;
    public AccountsLinkRequest withLinkedAccountId(String linkedAccountId) {
        this.linkedAccountId = linkedAccountId;
        return this;
    }
}