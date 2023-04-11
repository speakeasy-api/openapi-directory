import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReturnAddressAddress extends SpeakeasyBase {
    /**
     * CLDR country code (for example, "US").
     */
    country?: string;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    locality?: string;
    /**
     * Postal code or ZIP (for example, "94043").
     */
    postalCode?: string;
    /**
     * Name of the recipient to address returns to.
     */
    recipientName?: string;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string;
    /**
     * Street-level part of the address. May be up to two lines, each line specified as an array element.
     */
    streetAddress?: string[];
}
