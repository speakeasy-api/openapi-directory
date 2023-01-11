package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingAudienceInput
 * JSON template for an Analytics remarketing audience.
**/
public class RemarketingAudienceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RemarketingAudienceInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceDefinition")
    public RemarketingAudienceAudienceDefinition audienceDefinition;
    public RemarketingAudienceInput withAudienceDefinition(RemarketingAudienceAudienceDefinition audienceDefinition) {
        this.audienceDefinition = audienceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceType")
    public String audienceType;
    public RemarketingAudienceInput withAudienceType(String audienceType) {
        this.audienceType = audienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RemarketingAudienceInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RemarketingAudienceInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAdAccounts")
    public LinkedForeignAccountInput[] linkedAdAccounts;
    public RemarketingAudienceInput withLinkedAdAccounts(LinkedForeignAccountInput[] linkedAdAccounts) {
        this.linkedAdAccounts = linkedAdAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedViews")
    public String[] linkedViews;
    public RemarketingAudienceInput withLinkedViews(String[] linkedViews) {
        this.linkedViews = linkedViews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RemarketingAudienceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateBasedAudienceDefinition")
    public RemarketingAudienceStateBasedAudienceDefinition stateBasedAudienceDefinition;
    public RemarketingAudienceInput withStateBasedAudienceDefinition(RemarketingAudienceStateBasedAudienceDefinition stateBasedAudienceDefinition) {
        this.stateBasedAudienceDefinition = stateBasedAudienceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public RemarketingAudienceInput withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}