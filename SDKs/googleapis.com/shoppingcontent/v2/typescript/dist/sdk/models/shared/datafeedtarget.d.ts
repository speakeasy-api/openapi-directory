import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatafeedTarget extends SpeakeasyBase {
    /**
     * The country where the items in the feed will be included in the search index, represented as a CLDR territory code.
     */
    country?: string;
    /**
     * The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
     */
    excludedDestinations?: string[];
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. List of supported destinations (if available to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle
     */
    includedDestinations?: string[];
    /**
     * The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.
     */
    language?: string;
}
