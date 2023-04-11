import { SpeakeasyBase } from "../../../internal/utils";
export declare class UkAddressSuggestionUrls extends SpeakeasyBase {
    /**
     * URL to retrieve the entire details for a given address suggestion by the UDPRN
     */
    udprn: string;
    /**
     * Optionally returned field, to retrieve the entire details for a suggested Multiple Residence household
     */
    umprn?: string;
}
/**
 * Represents a possible address given an autocomplete query.
 *
 * @remarks
 *
 * UK Address Suggestions will return a UDPRN attribute if it references a deliverable endpoint found on Royal Mail's Postcode Address File dataset.
 *
 * UK Address Suggestion will return a UMPRN if it references a multiple occupancy premise found on Royal Mail's Multiple Residence dataset.
 *
 */
export declare class UkAddressSuggestion extends SpeakeasyBase {
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * Address suggestion for a given query.
     */
    suggestion: string;
    /**
     * UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.
     *
     * @remarks
     *
     * Up to 8-digit numeric code.
     *
     * A new UDPRN is automatically assigned to each new Delivery Point added to PAF.
     */
    udprn: number;
    /**
     * Optionally returned field, representing the UMPRN of a Multiple Residence household
     */
    umprn?: number;
    urls: UkAddressSuggestionUrls;
}
