import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Physical address
 */
export declare class Address extends SpeakeasyBase {
    city: string;
    /**
     * Three-character country code in ISO alpha-3 format.
     */
    country: string;
    /**
     * English name of the country.
     */
    countryName: string;
    /**
     * First line of the address.
     */
    line1: string;
    /**
     * Second line of the address.
     */
    line2?: string;
    postalCode: string;
    region?: string;
}
