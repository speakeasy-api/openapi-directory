/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PlacementGroup - Contains properties of a package or roadblock.
 */
public class PlacementGroup {
    /**
     * Account ID of this placement group. This is a read-only field that can be left blank.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;

    public PlacementGroup withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * Advertiser ID of this placement group. This is a required field on insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;

    public PlacementGroup withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;

    public PlacementGroup withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    
    /**
     * Whether this placement group is archived.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;

    public PlacementGroup withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    
    /**
     * Campaign ID of this placement group. This field is required on insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignId")
    public String campaignId;

    public PlacementGroup withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaignIdDimensionValue")
    public DimensionValue campaignIdDimensionValue;

    public PlacementGroup withCampaignIdDimensionValue(DimensionValue campaignIdDimensionValue) {
        this.campaignIdDimensionValue = campaignIdDimensionValue;
        return this;
    }
    
    /**
     * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childPlacementIds")
    public String[] childPlacementIds;

    public PlacementGroup withChildPlacementIds(String[] childPlacementIds) {
        this.childPlacementIds = childPlacementIds;
        return this;
    }
    
    /**
     * Comments for this placement group.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;

    public PlacementGroup withComment(String comment) {
        this.comment = comment;
        return this;
    }
    
    /**
     * ID of the content category assigned to this placement group.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategoryId")
    public String contentCategoryId;

    public PlacementGroup withContentCategoryId(String contentCategoryId) {
        this.contentCategoryId = contentCategoryId;
        return this;
    }
    
    /**
     * Modification timestamp.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInfo")
    public LastModifiedInfo createInfo;

    public PlacementGroup withCreateInfo(LastModifiedInfo createInfo) {
        this.createInfo = createInfo;
        return this;
    }
    
    /**
     * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteId")
    public String directorySiteId;

    public PlacementGroup withDirectorySiteId(String directorySiteId) {
        this.directorySiteId = directorySiteId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySiteIdDimensionValue")
    public DimensionValue directorySiteIdDimensionValue;

    public PlacementGroup withDirectorySiteIdDimensionValue(DimensionValue directorySiteIdDimensionValue) {
        this.directorySiteIdDimensionValue = directorySiteIdDimensionValue;
        return this;
    }
    
    /**
     * External ID for this placement.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;

    public PlacementGroup withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    
    /**
     * ID of this placement group. This is a read-only, auto-generated field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public PlacementGroup withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;

    public PlacementGroup withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public PlacementGroup withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Modification timestamp.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;

    public PlacementGroup withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    
    /**
     * Name of this placement group. This is a required field and must be less than 256 characters long.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public PlacementGroup withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementGroupType")
    public PlacementGroupPlacementGroupTypeEnum placementGroupType;

    public PlacementGroup withPlacementGroupType(PlacementGroupPlacementGroupTypeEnum placementGroupType) {
        this.placementGroupType = placementGroupType;
        return this;
    }
    
    /**
     * ID of the placement strategy assigned to this placement group.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategyId")
    public String placementStrategyId;

    public PlacementGroup withPlacementStrategyId(String placementStrategyId) {
        this.placementStrategyId = placementStrategyId;
        return this;
    }
    
    /**
     * Pricing Schedule
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSchedule")
    public PricingSchedule pricingSchedule;

    public PlacementGroup withPricingSchedule(PricingSchedule pricingSchedule) {
        this.pricingSchedule = pricingSchedule;
        return this;
    }
    
    /**
     * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPlacementId")
    public String primaryPlacementId;

    public PlacementGroup withPrimaryPlacementId(String primaryPlacementId) {
        this.primaryPlacementId = primaryPlacementId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPlacementIdDimensionValue")
    public DimensionValue primaryPlacementIdDimensionValue;

    public PlacementGroup withPrimaryPlacementIdDimensionValue(DimensionValue primaryPlacementIdDimensionValue) {
        this.primaryPlacementIdDimensionValue = primaryPlacementIdDimensionValue;
        return this;
    }
    
    /**
     * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteId")
    public String siteId;

    public PlacementGroup withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteIdDimensionValue")
    public DimensionValue siteIdDimensionValue;

    public PlacementGroup withSiteIdDimensionValue(DimensionValue siteIdDimensionValue) {
        this.siteIdDimensionValue = siteIdDimensionValue;
        return this;
    }
    
    /**
     * Subaccount ID of this placement group. This is a read-only field that can be left blank.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;

    public PlacementGroup withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    
    public PlacementGroup(){}
}
