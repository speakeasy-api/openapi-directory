import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountAddress extends SpeakeasyBase {
    /**
     * CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts.
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
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string;
    /**
     * Street-level part of the address. Use `\n` to add a second line.
     */
    streetAddress?: string;
}
