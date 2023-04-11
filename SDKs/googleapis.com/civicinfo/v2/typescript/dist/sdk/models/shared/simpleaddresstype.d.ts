import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A simple representation of an address.
 */
export declare class SimpleAddressType extends SpeakeasyBase {
    /**
     * The city or town for the address.
     */
    city?: string;
    /**
     * The street name and number of this address.
     */
    line1?: string;
    /**
     * The second line the address, if needed.
     */
    line2?: string;
    /**
     * The third line of the address, if needed.
     */
    line3?: string;
    /**
     * The name of the location.
     */
    locationName?: string;
    /**
     * The US two letter state abbreviation of the address.
     */
    state?: string;
    /**
     * The US Postal Zip Code of the address.
     */
    zip?: string;
}
