import { SpeakeasyBase } from "../../../internal/utils";
import { RegionGeoTargetArea } from "./regiongeotargetarea";
import { RegionPostalCodeArea } from "./regionpostalcodearea";
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
 */
export declare class RegionInput extends SpeakeasyBase {
    /**
     * The display name of the region.
     */
    displayName?: string;
    /**
     * A list of geotargets that defines the region area.
     */
    geotargetArea?: RegionGeoTargetArea;
    /**
     * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
     */
    postalCodeArea?: RegionPostalCodeArea;
}
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
 */
export declare class Region extends SpeakeasyBase {
    /**
     * The display name of the region.
     */
    displayName?: string;
    /**
     * A list of geotargets that defines the region area.
     */
    geotargetArea?: RegionGeoTargetArea;
    /**
     * Output only. Immutable. Merchant that owns the region.
     */
    merchantId?: string;
    /**
     * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
     */
    postalCodeArea?: RegionPostalCodeArea;
    /**
     * Output only. Immutable. The ID uniquely identifying each region.
     */
    regionId?: string;
    /**
     * Output only. Indicates if the region is eligible to use in the Regional Inventory configuration.
     */
    regionalInventoryEligible?: boolean;
    /**
     * Output only. Indicates if the region is eligible to use in the Shipping Services configuration.
     */
    shippingEligible?: boolean;
}
