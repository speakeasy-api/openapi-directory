import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class ProductShipping extends SpeakeasyBase {
    /**
     * The CLDR territory code of the country to which an item will ship.
     */
    country?: string;
    /**
     * The location where the shipping is applicable, represented by a location group name.
     */
    locationGroupName?: string;
    /**
     * The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API.
     */
    locationId?: string;
    /**
     * Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.
     */
    maxHandlingTime?: string;
    /**
     * Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.
     */
    maxTransitTime?: string;
    /**
     * Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present.
     */
    minHandlingTime?: string;
    /**
     * Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present.
     */
    minTransitTime?: string;
    /**
     * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.
     */
    postalCode?: string;
    price?: Price;
    /**
     * The geographic region to which a shipping rate applies.
     */
    region?: string;
    /**
     * A free-form description of the service class or delivery speed.
     */
    service?: string;
}
