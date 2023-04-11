import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderBillingAddress extends SpeakeasyBase {
    /**
     * Address of the Order's Billing Address
     */
    address?: string;
    /**
     * City of the Order's Billing Address
     */
    city?: string;
    /**
     * Country code of the Order's Billing Address (ISO 3166-1 alpha-2)
     */
    country?: string;
    /**
     * Country name of the Order's Billing Address
     */
    countryName?: string;
    /**
     * Municipality of the Order's Billing Address
     */
    municipality?: string;
    /**
     * Name of the Order's Billing Address
     */
    name?: string;
    /**
     * Postal code of the Order's Billing Address
     */
    postal?: string;
    /**
     * Region code of the Order's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/)
     */
    region?: string;
    /**
     * Street number of the Order's Billing Address
     */
    streetNumber?: number;
    /**
     * Surname of the Order's Billing Address
     */
    surname?: string;
}
