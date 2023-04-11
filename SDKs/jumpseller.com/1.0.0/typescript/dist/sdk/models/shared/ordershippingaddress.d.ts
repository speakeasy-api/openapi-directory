import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderShippingAddress extends SpeakeasyBase {
    /**
     * Address of the Order's Shipping Address
     */
    address?: string;
    /**
     * City of the Order's Shipping Address
     */
    city?: string;
    /**
     * Country code of the Order's Shipping Address (ISO 3166-1 alpha-2)
     */
    country?: string;
    /**
     * Country name of the Order's Shipping Address
     */
    countryName?: string;
    /**
     * Latitude of the Order's Shipping Address
     */
    latitude?: number;
    /**
     * Longitude of the Order's Shipping Address
     */
    longitude?: number;
    /**
     * Municipality of the Order's Shipping Address
     */
    municipality?: string;
    /**
     * Name of the Order's Shipping Address
     */
    name?: string;
    /**
     * Postal code of the Order's Shipping Address
     */
    postal?: string;
    /**
     * Region code of the Order's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/)
     */
    region?: string;
    /**
     * Street number of the Order's Shipping Address
     */
    streetNumber?: number;
    /**
     * Surname of the Order's Shipping Address
     */
    surname?: string;
}
