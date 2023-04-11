import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatafeedTarget extends SpeakeasyBase {
    /**
     * Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
     */
    country?: string;
    /**
     * The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.
     */
    excludedDestinations?: string[];
    /**
     * Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).
     */
    feedLabel?: string;
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[];
    /**
     * The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.
     */
    language?: string;
    /**
     * The countries where the items may be displayed. Represented as a CLDR territory code. Will be ignored for "product inventory" feeds.
     */
    targetCountries?: string[];
}
