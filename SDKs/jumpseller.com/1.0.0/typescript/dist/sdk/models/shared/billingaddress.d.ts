import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillingAddress extends SpeakeasyBase {
    /**
     * Address of the Customer's Billing Address
     */
    address?: string;
    /**
     * City of the Customer's Billing Address
     */
    city?: string;
    /**
     * Country code of the Customer's Billing Address (ISO 3166-1 alpha-2)
     */
    country?: string;
    /**
     * Municipality of the Customer's Billing Address
     */
    municipality?: string;
    /**
     * Name of the Customer's Billing Address
     */
    name?: string;
    /**
     * Postal code of the Customer's Billing Address
     */
    postal?: string;
    /**
     * Region code of the Customer's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/)
     */
    region?: string;
    /**
     * Surname of the Customer's Billing Address
     */
    surname?: string;
    /**
     * Tax id of the Customer's Billing Address
     */
    taxid?: string;
}
