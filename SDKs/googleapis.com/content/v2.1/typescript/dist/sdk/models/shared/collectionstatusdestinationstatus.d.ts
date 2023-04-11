import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Destination status message.
 */
export declare class CollectionStatusDestinationStatus extends SpeakeasyBase {
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is approved.
     */
    approvedCountries?: string[];
    /**
     * The name of the destination
     */
    destination?: string;
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is disapproved.
     */
    disapprovedCountries?: string[];
    /**
     * Country codes (ISO 3166-1 alpha-2) where the collection is pending approval.
     */
    pendingCountries?: string[];
    /**
     * The status for the specified destination in the collections target country.
     */
    status?: string;
}
