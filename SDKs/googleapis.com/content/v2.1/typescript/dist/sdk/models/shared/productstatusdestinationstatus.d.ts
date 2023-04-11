import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductStatusDestinationStatus extends SpeakeasyBase {
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is approved.
     */
    approvedCountries?: string[];
    /**
     * The name of the destination
     */
    destination?: string;
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.
     */
    disapprovedCountries?: string[];
    /**
     * List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.
     */
    pendingCountries?: string[];
    /**
     * Destination approval status in `targetCountry` of the offer.
     */
    status?: string;
}
