import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PricingSchedule } from "./pricingschedule";
/**
 * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
 */
export declare enum PlacementGroupPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}
/**
 * Contains properties of a package or roadblock.
 */
export declare class PlacementGroup extends SpeakeasyBase {
    /**
     * Account ID of this placement group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this placement group. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Whether this placement group is archived.
     */
    archived?: boolean;
    /**
     * Campaign ID of this placement group. This field is required on insertion.
     */
    campaignId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    campaignIdDimensionValue?: DimensionValue;
    /**
     * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
     */
    childPlacementIds?: string[];
    /**
     * Comments for this placement group.
     */
    comment?: string;
    /**
     * ID of the content category assigned to this placement group.
     */
    contentCategoryId?: string;
    /**
     * Modification timestamp.
     */
    createInfo?: LastModifiedInfo;
    /**
     * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    directorySiteIdDimensionValue?: DimensionValue;
    /**
     * External ID for this placement.
     */
    externalId?: string;
    /**
     * ID of this placement group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
     */
    kind?: string;
    /**
     * Modification timestamp.
     */
    lastModifiedInfo?: LastModifiedInfo;
    /**
     * Name of this placement group. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
     */
    placementGroupType?: PlacementGroupPlacementGroupTypeEnum;
    /**
     * ID of the placement strategy assigned to this placement group.
     */
    placementStrategyId?: string;
    /**
     * Pricing Schedule
     */
    pricingSchedule?: PricingSchedule;
    /**
     * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
     */
    primaryPlacementId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    primaryPlacementIdDimensionValue?: DimensionValue;
    /**
     * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    siteId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    siteIdDimensionValue?: DimensionValue;
    /**
     * Subaccount ID of this placement group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
}
