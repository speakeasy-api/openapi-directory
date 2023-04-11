import { SpeakeasyBase } from "../../../internal/utils";
export declare class Address extends SpeakeasyBase {
    /**
     * Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    administrativeArea?: string;
    /**
     * Required. City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
     */
    city?: string;
    /**
     * Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)(e.g. "US").
     */
    country?: string;
    /**
     * Required. Postal code or ZIP (e.g. "94043"). Required.
     */
    postalCode?: string;
    /**
     * Street-level part of the address.
     */
    streetAddress?: string;
}
