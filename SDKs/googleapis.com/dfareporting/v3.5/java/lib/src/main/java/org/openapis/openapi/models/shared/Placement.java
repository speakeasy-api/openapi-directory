/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Placement - Contains properties of a placement.
 */
public class Placement {
    /**
     * Account ID of this placement. This field can be left blank.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;

    public Placement withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adBlockingOptOut")
    public Boolean adBlockingOptOut;

    public Placement withAdBlockingOptOut(Boolean adBlockingOptOut) {
        this.adBlockingOptOut = adBlockingOptOut;
        return this;
    }
    
    /**
     * Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalSizes")
    public Size[] additionalSizes;

    public Placement withAdditionalSizes(Size[] additionalSizes) {
        this.additionalSizes = additionalSizes;
        return this;
    }
    
    /**
     * Advertiser ID of this placement. This field can be left blank.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;

    public Placement withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;

    public Placement withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    
    /**
     * Whether this placement is archived.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;

    public Placement withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    
    /**
     * Campaign ID of this placement. This field is a required field on insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;

    public Placement withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;

    public Placement withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    
    /**
     * Comments for this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;

    public Placement withComment(String comment) {
        this.comment = comment;
        return this;
    }
    
    /**
     * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility")
    public PlacementCompatibilityEnum compatibility;

    public Placement withCompatibility(PlacementCompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    
    /**
     * ID of the content category assigned to this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoryId")
    public String contentCategoryId;

    public Placement withContentCategoryId(String contentCategoryId) {
        this.contentCategoryId = contentCategoryId;
        return this;
    }
    
    /**
     * Modification timestamp.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;

    public Placement withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    
    /**
     * Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;

    public Placement withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteIdDimensionValue")
    public DimensionValue directorySiteIdDimensionValue;

    public Placement withDirectorySiteIdDimensionValue(DimensionValue directorySiteIdDimensionValue) {
        this.directorySiteIdDimensionValue = directorySiteIdDimensionValue;
        return this;
    }
    
    /**
     * External ID for this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;

    public Placement withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    
    /**
     * ID of this placement. This is a read-only, auto-generated field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Placement withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;

    public Placement withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    
    /**
     * Key name of this placement. This is a read-only, auto-generated field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyName")
    public String keyName;

    public Placement withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public Placement withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Modification timestamp.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;

    public Placement withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    
    /**
     * Lookback configuration settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookbackConfiguration")
    public LookbackConfiguration lookbackConfiguration;

    public Placement withLookbackConfiguration(LookbackConfiguration lookbackConfiguration) {
        this.lookbackConfiguration = lookbackConfiguration;
        return this;
    }
    
    /**
     * Name of this placement.This is a required field and must be less than or equal to 512 characters long.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Placement withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Placement tag wrapping
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerWrappingData")
    public MeasurementPartnerWrappingData partnerWrappingData;

    public Placement withPartnerWrappingData(MeasurementPartnerWrappingData partnerWrappingData) {
        this.partnerWrappingData = partnerWrappingData;
        return this;
    }
    
    /**
     * Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentApproved")
    public Boolean paymentApproved;

    public Placement withPaymentApproved(Boolean paymentApproved) {
        this.paymentApproved = paymentApproved;
        return this;
    }
    
    /**
     * Payment source for this placement. This is a required field that is read-only after insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentSource")
    public PlacementPaymentSourceEnum paymentSource;

    public Placement withPaymentSource(PlacementPaymentSourceEnum paymentSource) {
        this.paymentSource = paymentSource;
        return this;
    }
    
    /**
     * ID of this placement's group, if applicable.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupId")
    public String placementGroupId;

    public Placement withPlacementGroupId(String placementGroupId) {
        this.placementGroupId = placementGroupId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupIdDimensionValue")
    public DimensionValue placementGroupIdDimensionValue;

    public Placement withPlacementGroupIdDimensionValue(DimensionValue placementGroupIdDimensionValue) {
        this.placementGroupIdDimensionValue = placementGroupIdDimensionValue;
        return this;
    }
    
    /**
     * ID of the placement strategy assigned to this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategyId")
    public String placementStrategyId;

    public Placement withPlacementStrategyId(String placementStrategyId) {
        this.placementStrategyId = placementStrategyId;
        return this;
    }
    
    /**
     * Pricing Schedule
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSchedule")
    public PricingSchedule pricingSchedule;

    public Placement withPricingSchedule(PricingSchedule pricingSchedule) {
        this.pricingSchedule = pricingSchedule;
        return this;
    }
    
    /**
     * Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;

    public Placement withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    
    /**
     * Modification timestamp.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherUpdateInfo")
    public LastModifiedInfo publisherUpdateInfo;

    public Placement withPublisherUpdateInfo(LastModifiedInfo publisherUpdateInfo) {
        this.publisherUpdateInfo = publisherUpdateInfo;
        return this;
    }
    
    /**
     * Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;

    public Placement withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;

    public Placement withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    
    /**
     * Represents the dimensions of ads, placements, creatives, or creative assets.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;

    public Placement withSize(Size size) {
        this.size = size;
        return this;
    }
    
    /**
     * Whether creatives assigned to this placement must be SSL-compliant.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;

    public Placement withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    
    /**
     * Third-party placement status.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PlacementStatusEnum status;

    public Placement withStatus(PlacementStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Subaccount ID of this placement. This field can be left blank.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;

    public Placement withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    
    /**
     * Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFormats")
    public PlacementTagFormatsEnum[] tagFormats;

    public Placement withTagFormats(PlacementTagFormatsEnum[] tagFormats) {
        this.tagFormats = tagFormats;
        return this;
    }
    
    /**
     * Tag Settings
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSetting")
    public TagSetting tagSetting;

    public Placement withTagSetting(TagSetting tagSetting) {
        this.tagSetting = tagSetting;
        return this;
    }
    
    /**
     * Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoActiveViewOptOut")
    public Boolean videoActiveViewOptOut;

    public Placement withVideoActiveViewOptOut(Boolean videoActiveViewOptOut) {
        this.videoActiveViewOptOut = videoActiveViewOptOut;
        return this;
    }
    
    /**
     * Video Settings
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSettings")
    public VideoSettings videoSettings;

    public Placement withVideoSettings(VideoSettings videoSettings) {
        this.videoSettings = videoSettings;
        return this;
    }
    
    /**
     * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpaidAdapterChoice")
    public PlacementVpaidAdapterChoiceEnum vpaidAdapterChoice;

    public Placement withVpaidAdapterChoice(PlacementVpaidAdapterChoiceEnum vpaidAdapterChoice) {
        this.vpaidAdapterChoice = vpaidAdapterChoice;
        return this;
    }
    
    /**
     * Whether this placement opts out of tag wrapping.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrappingOptOut")
    public Boolean wrappingOptOut;

    public Placement withWrappingOptOut(Boolean wrappingOptOut) {
        this.wrappingOptOut = wrappingOptOut;
        return this;
    }
    
    public Placement(){}
}
