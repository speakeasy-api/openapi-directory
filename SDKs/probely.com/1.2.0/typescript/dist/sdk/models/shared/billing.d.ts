import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Billing information
 */
export declare class Billing extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
    /**
     * City
     */
    city: string;
    /**
     * ISO 3166 alpha-2 country code
     */
    country: string;
    /**
     * Contact email
     */
    email: string;
    /**
     * First name
     */
    firstName: string;
    /**
     * Last name
     */
    lastName: string;
    /**
     * Extra data
     */
    other?: string;
    /**
     * Company registration number
     */
    regNumber?: string;
    /**
     * Company VAT registration number
     */
    vatNumber: string;
    /**
     * Address ZIP code
     */
    zip: string;
}
