import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductTax extends SpeakeasyBase {
    /**
     * The country within which the item is taxed, specified as a CLDR territory code.
     */
    country?: string;
    /**
     * The numeric ID of a location that the tax rate applies to as defined in the Google Ads API.
     */
    locationId?: string;
    /**
     * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.
     */
    postalCode?: string;
    /**
     * The percentage of tax rate that applies to the item price.
     */
    rate?: number;
    /**
     * The geographic region to which the tax rate applies.
     */
    region?: string;
    /**
     * Should be set to true if tax is charged on shipping.
     */
    taxShip?: boolean;
}
