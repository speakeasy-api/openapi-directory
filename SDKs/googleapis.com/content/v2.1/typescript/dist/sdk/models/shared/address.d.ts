import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    administrativeArea?: string;
    /**
     * Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    city?: string;
    /**
     * Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US").
     */
    country?: string;
    /**
     * Required. Postal code or ZIP (for example, "94043").
     */
    postalCode?: string;
    /**
     * Street-level part of the address. Use `\n` to add a second line.
     */
    streetAddress?: string;
}
