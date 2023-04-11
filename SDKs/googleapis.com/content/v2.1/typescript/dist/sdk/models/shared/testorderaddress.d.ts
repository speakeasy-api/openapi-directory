import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestOrderAddress extends SpeakeasyBase {
    /**
     * CLDR country code (for example, "US").
     */
    country?: string;
    /**
     * Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States
     */
    fullAddress?: string[];
    /**
     * Whether the address is a post office box.
     */
    isPostOfficeBox?: boolean;
    /**
     * City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).
     */
    locality?: string;
    /**
     * Postal Code or ZIP (for example, "94043").
     */
    postalCode?: string;
    /**
     * Name of the recipient.
     */
    recipientName?: string;
    /**
     * Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    region?: string;
    /**
     * Street-level part of the address. Use `\n` to add a second line.
     */
    streetAddress?: string[];
}
