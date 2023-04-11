import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Status of this advertiser.
 */
export declare enum AdvertiserStatusEnum {
    Approved = "APPROVED",
    OnHold = "ON_HOLD"
}
/**
 * Contains properties of a Campaign Manager advertiser.
 */
export declare class Advertiser extends SpeakeasyBase {
    /**
     * Account ID of this advertiser.This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.
     */
    advertiserGroupId?: string;
    /**
     * Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
     */
    clickThroughUrlSuffix?: string;
    /**
     * ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
     */
    defaultClickThroughEventTagId?: string;
    /**
     * Default email address used in sender field for tag emails.
     */
    defaultEmail?: string;
    /**
     * Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser.
     */
    floodlightConfigurationId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    floodlightConfigurationIdDimensionValue?: DimensionValue;
    /**
     * ID of this advertiser. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Represents a DimensionValue resource.
     */
    idDimensionValue?: DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
     */
    kind?: string;
    /**
     * Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
     */
    name?: string;
    /**
     * Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement.
     */
    originalFloodlightConfigurationId?: string;
    /**
     * Status of this advertiser.
     */
    status?: AdvertiserStatusEnum;
    /**
     * Subaccount ID of this advertiser.This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Suspension status of this advertiser.
     */
    suspended?: boolean;
}
