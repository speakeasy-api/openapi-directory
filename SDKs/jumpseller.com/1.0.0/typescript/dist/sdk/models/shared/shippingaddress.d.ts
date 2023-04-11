import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShippingAddress extends SpeakeasyBase {
    /**
     * Address of the Customer's Shipping Address
     */
    address?: string;
    /**
     * City of the Customer's Shipping Address
     */
    city?: string;
    /**
     * Country code of the Customer's Shipping Address (ISO 3166-1 alpha-2)
     */
    country?: string;
    /**
     * Municipality of the Customer's Shipping Address
     */
    municipality?: string;
    /**
     * Name of the Customer's Shipping Address
     */
    name?: string;
    /**
     * Postal code of the Customer's Shipping Address
     */
    postal?: string;
    /**
     * Region code of the Customer's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/)
     */
    region?: string;
    /**
     * Surname of the Customer's Shipping Address
     */
    surname?: string;
}
