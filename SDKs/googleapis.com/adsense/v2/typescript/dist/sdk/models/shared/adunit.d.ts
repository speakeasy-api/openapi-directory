import { SpeakeasyBase } from "../../../internal/utils";
import { ContentAdsSettings } from "./contentadssettings";
/**
 * State of the ad unit.
 */
export declare enum AdUnitStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
/**
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
 */
export declare class AdUnit extends SpeakeasyBase {
    /**
     * Settings specific to content ads (AFC).
     */
    contentAdsSettings?: ContentAdsSettings;
    /**
     * Required. Display name of the ad unit, as provided when the ad unit was created.
     */
    displayName?: string;
    /**
     * Output only. Resource name of the ad unit. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}
     */
    name?: string;
    /**
     * Output only. Unique ID of the ad unit as used in the `AD_UNIT_ID` reporting dimension.
     */
    reportingDimensionId?: string;
    /**
     * State of the ad unit.
     */
    state?: AdUnitStateEnum;
}
/**
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
 */
export declare class AdUnitInput extends SpeakeasyBase {
    /**
     * Settings specific to content ads (AFC).
     */
    contentAdsSettings?: ContentAdsSettings;
    /**
     * Required. Display name of the ad unit, as provided when the ad unit was created.
     */
    displayName?: string;
    /**
     * State of the ad unit.
     */
    state?: AdUnitStateEnum;
}
