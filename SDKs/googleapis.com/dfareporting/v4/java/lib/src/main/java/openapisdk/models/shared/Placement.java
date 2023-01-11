package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Placement
 * Contains properties of a placement.
**/
public class Placement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Placement withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeStatus")
    public PlacementActiveStatusEnum activeStatus;
    public Placement withActiveStatus(PlacementActiveStatusEnum activeStatus) {
        this.activeStatus = activeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adBlockingOptOut")
    public Boolean adBlockingOptOut;
    public Placement withAdBlockingOptOut(Boolean adBlockingOptOut) {
        this.adBlockingOptOut = adBlockingOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalSizes")
    public Size[] additionalSizes;
    public Placement withAdditionalSizes(Size[] additionalSizes) {
        this.additionalSizes = additionalSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Placement withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public Placement withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;
    public Placement withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;
    public Placement withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Placement withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility")
    public PlacementCompatibilityEnum compatibility;
    public Placement withCompatibility(PlacementCompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoryId")
    public String contentCategoryId;
    public Placement withContentCategoryId(String contentCategoryId) {
        this.contentCategoryId = contentCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;
    public Placement withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;
    public Placement withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteIdDimensionValue")
    public DimensionValue directorySiteIdDimensionValue;
    public Placement withDirectorySiteIdDimensionValue(DimensionValue directorySiteIdDimensionValue) {
        this.directorySiteIdDimensionValue = directorySiteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Placement withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Placement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Placement withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyName")
    public String keyName;
    public Placement withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Placement withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Placement withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookbackConfiguration")
    public LookbackConfiguration lookbackConfiguration;
    public Placement withLookbackConfiguration(LookbackConfiguration lookbackConfiguration) {
        this.lookbackConfiguration = lookbackConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Placement withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerWrappingData")
    public MeasurementPartnerWrappingData partnerWrappingData;
    public Placement withPartnerWrappingData(MeasurementPartnerWrappingData partnerWrappingData) {
        this.partnerWrappingData = partnerWrappingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentApproved")
    public Boolean paymentApproved;
    public Placement withPaymentApproved(Boolean paymentApproved) {
        this.paymentApproved = paymentApproved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentSource")
    public PlacementPaymentSourceEnum paymentSource;
    public Placement withPaymentSource(PlacementPaymentSourceEnum paymentSource) {
        this.paymentSource = paymentSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupId")
    public String placementGroupId;
    public Placement withPlacementGroupId(String placementGroupId) {
        this.placementGroupId = placementGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupIdDimensionValue")
    public DimensionValue placementGroupIdDimensionValue;
    public Placement withPlacementGroupIdDimensionValue(DimensionValue placementGroupIdDimensionValue) {
        this.placementGroupIdDimensionValue = placementGroupIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategyId")
    public String placementStrategyId;
    public Placement withPlacementStrategyId(String placementStrategyId) {
        this.placementStrategyId = placementStrategyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSchedule")
    public PricingSchedule pricingSchedule;
    public Placement withPricingSchedule(PricingSchedule pricingSchedule) {
        this.pricingSchedule = pricingSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public Placement withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherUpdateInfo")
    public LastModifiedInfo publisherUpdateInfo;
    public Placement withPublisherUpdateInfo(LastModifiedInfo publisherUpdateInfo) {
        this.publisherUpdateInfo = publisherUpdateInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;
    public Placement withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;
    public Placement withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public Placement withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;
    public Placement withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PlacementStatusEnum status;
    public Placement withStatus(PlacementStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Placement withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFormats")
    public PlacementTagFormatsEnum[] tagFormats;
    public Placement withTagFormats(PlacementTagFormatsEnum[] tagFormats) {
        this.tagFormats = tagFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSetting")
    public TagSetting tagSetting;
    public Placement withTagSetting(TagSetting tagSetting) {
        this.tagSetting = tagSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoActiveViewOptOut")
    public Boolean videoActiveViewOptOut;
    public Placement withVideoActiveViewOptOut(Boolean videoActiveViewOptOut) {
        this.videoActiveViewOptOut = videoActiveViewOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSettings")
    public VideoSettings videoSettings;
    public Placement withVideoSettings(VideoSettings videoSettings) {
        this.videoSettings = videoSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpaidAdapterChoice")
    public PlacementVpaidAdapterChoiceEnum vpaidAdapterChoice;
    public Placement withVpaidAdapterChoice(PlacementVpaidAdapterChoiceEnum vpaidAdapterChoice) {
        this.vpaidAdapterChoice = vpaidAdapterChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrappingOptOut")
    public Boolean wrappingOptOut;
    public Placement withWrappingOptOut(Boolean wrappingOptOut) {
        this.wrappingOptOut = wrappingOptOut;
        return this;
    }
}