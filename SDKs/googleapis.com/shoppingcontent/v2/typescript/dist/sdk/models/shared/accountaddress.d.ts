import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountAddress extends SpeakeasyBase {
    /**
     * CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the country of their parent MCA.
     */
    country?: string;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     */
    locality?: string;
    /**
     * Postal code or ZIP (e.g. "94043").
     */
    postalCode?: string;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string;
    /**
     * Street-level part of the address.
     */
    streetAddress?: string;
}
