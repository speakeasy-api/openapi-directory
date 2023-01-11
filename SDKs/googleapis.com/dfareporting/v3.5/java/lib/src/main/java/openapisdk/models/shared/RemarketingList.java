package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingList
 * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
**/
public class RemarketingList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public RemarketingList withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public RemarketingList withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public RemarketingList withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public RemarketingList withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RemarketingList withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RemarketingList withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RemarketingList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeSpan")
    public String lifeSpan;
    public RemarketingList withLifeSpan(String lifeSpan) {
        this.lifeSpan = lifeSpan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPopulationRule")
    public ListPopulationRule listPopulationRule;
    public RemarketingList withListPopulationRule(ListPopulationRule listPopulationRule) {
        this.listPopulationRule = listPopulationRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listSize")
    public String listSize;
    public RemarketingList withListSize(String listSize) {
        this.listSize = listSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listSource")
    public RemarketingListListSourceEnum listSource;
    public RemarketingList withListSource(RemarketingListListSourceEnum listSource) {
        this.listSource = listSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RemarketingList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public RemarketingList withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
}