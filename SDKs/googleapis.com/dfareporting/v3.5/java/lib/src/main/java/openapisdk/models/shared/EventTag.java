package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTag
 * Contains properties of an event tag.
**/
public class EventTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public EventTag withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public EventTag withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public EventTag withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public EventTag withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;
    public EventTag withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledByDefault")
    public Boolean enabledByDefault;
    public EventTag withEnabledByDefault(Boolean enabledByDefault) {
        this.enabledByDefault = enabledByDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeFromAdxRequests")
    public Boolean excludeFromAdxRequests;
    public EventTag withExcludeFromAdxRequests(Boolean excludeFromAdxRequests) {
        this.excludeFromAdxRequests = excludeFromAdxRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EventTag withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventTag withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EventTag withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteFilterType")
    public EventTagSiteFilterTypeEnum siteFilterType;
    public EventTag withSiteFilterType(EventTagSiteFilterTypeEnum siteFilterType) {
        this.siteFilterType = siteFilterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIds")
    public String[] siteIds;
    public EventTag withSiteIds(String[] siteIds) {
        this.siteIds = siteIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public EventTag withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EventTagStatusEnum status;
    public EventTag withStatus(EventTagStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public EventTag withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EventTagTypeEnum type;
    public EventTag withType(EventTagTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public EventTag withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlEscapeLevels")
    public Integer urlEscapeLevels;
    public EventTag withUrlEscapeLevels(Integer urlEscapeLevels) {
        this.urlEscapeLevels = urlEscapeLevels;
        return this;
    }
}