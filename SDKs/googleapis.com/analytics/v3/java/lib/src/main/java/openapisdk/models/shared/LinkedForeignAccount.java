package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkedForeignAccount
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
public class LinkedForeignAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public LinkedForeignAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleForSearch")
    public Boolean eligibleForSearch;
    public LinkedForeignAccount withEligibleForSearch(Boolean eligibleForSearch) {
        this.eligibleForSearch = eligibleForSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LinkedForeignAccount withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public LinkedForeignAccount withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LinkedForeignAccount withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAccountId")
    public String linkedAccountId;
    public LinkedForeignAccount withLinkedAccountId(String linkedAccountId) {
        this.linkedAccountId = linkedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remarketingAudienceId")
    public String remarketingAudienceId;
    public LinkedForeignAccount withRemarketingAudienceId(String remarketingAudienceId) {
        this.remarketingAudienceId = remarketingAudienceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public LinkedForeignAccount withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LinkedForeignAccount withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public LinkedForeignAccount withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}