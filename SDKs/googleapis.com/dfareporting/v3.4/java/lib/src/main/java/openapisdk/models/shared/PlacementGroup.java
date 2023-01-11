package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementGroup
 * Contains properties of a package or roadblock.
**/
public class PlacementGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PlacementGroup withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public PlacementGroup withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public PlacementGroup withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public PlacementGroup withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public PlacementGroup withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;
    public PlacementGroup withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childPlacementIds")
    public String[] childPlacementIds;
    public PlacementGroup withChildPlacementIds(String[] childPlacementIds) {
        this.childPlacementIds = childPlacementIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public PlacementGroup withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoryId")
    public String contentCategoryId;
    public PlacementGroup withContentCategoryId(String contentCategoryId) {
        this.contentCategoryId = contentCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;
    public PlacementGroup withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;
    public PlacementGroup withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteIdDimensionValue")
    public DimensionValue directorySiteIdDimensionValue;
    public PlacementGroup withDirectorySiteIdDimensionValue(DimensionValue directorySiteIdDimensionValue) {
        this.directorySiteIdDimensionValue = directorySiteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public PlacementGroup withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PlacementGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public PlacementGroup withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlacementGroup withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public PlacementGroup withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupType")
    public PlacementGroupPlacementGroupTypeEnum placementGroupType;
    public PlacementGroup withPlacementGroupType(PlacementGroupPlacementGroupTypeEnum placementGroupType) {
        this.placementGroupType = placementGroupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategyId")
    public String placementStrategyId;
    public PlacementGroup withPlacementStrategyId(String placementStrategyId) {
        this.placementStrategyId = placementStrategyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSchedule")
    public PricingSchedule pricingSchedule;
    public PlacementGroup withPricingSchedule(PricingSchedule pricingSchedule) {
        this.pricingSchedule = pricingSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPlacementId")
    public String primaryPlacementId;
    public PlacementGroup withPrimaryPlacementId(String primaryPlacementId) {
        this.primaryPlacementId = primaryPlacementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPlacementIdDimensionValue")
    public DimensionValue primaryPlacementIdDimensionValue;
    public PlacementGroup withPrimaryPlacementIdDimensionValue(DimensionValue primaryPlacementIdDimensionValue) {
        this.primaryPlacementIdDimensionValue = primaryPlacementIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;
    public PlacementGroup withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;
    public PlacementGroup withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public PlacementGroup withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
}