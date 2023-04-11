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
     * The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.
     */
    locationId?: string;
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
