package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RemarketingAudience
 * JSON template for an Analytics remarketing audience.
**/
public class RemarketingAudience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RemarketingAudience withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceDefinition")
    public RemarketingAudienceAudienceDefinition audienceDefinition;
    public RemarketingAudience withAudienceDefinition(RemarketingAudienceAudienceDefinition audienceDefinition) {
        this.audienceDefinition = audienceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceType")
    public String audienceType;
    public RemarketingAudience withAudienceType(String audienceType) {
        this.audienceType = audienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public RemarketingAudience withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RemarketingAudience withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RemarketingAudience withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public RemarketingAudience withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RemarketingAudience withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAdAccounts")
    public LinkedForeignAccount[] linkedAdAccounts;
    public RemarketingAudience withLinkedAdAccounts(LinkedForeignAccount[] linkedAdAccounts) {
        this.linkedAdAccounts = linkedAdAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedViews")
    public String[] linkedViews;
    public RemarketingAudience withLinkedViews(String[] linkedViews) {
        this.linkedViews = linkedViews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RemarketingAudience withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateBasedAudienceDefinition")
    public RemarketingAudienceStateBasedAudienceDefinition stateBasedAudienceDefinition;
    public RemarketingAudience withStateBasedAudienceDefinition(RemarketingAudienceStateBasedAudienceDefinition stateBasedAudienceDefinition) {
        this.stateBasedAudienceDefinition = stateBasedAudienceDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public RemarketingAudience withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public RemarketingAudience withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}