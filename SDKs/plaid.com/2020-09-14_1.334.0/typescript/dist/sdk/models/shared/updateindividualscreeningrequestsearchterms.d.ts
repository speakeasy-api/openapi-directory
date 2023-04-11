import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search terms for editing an individual watchlist screening
 */
export declare class UpdateIndividualScreeningRequestSearchTerms extends SpeakeasyBase {
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     */
    country?: string;
    /**
     * A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).
     */
    dateOfBirth?: Date;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     */
    documentNumber?: string;
    /**
     * The legal name of the individual being screened.
     */
    legalName?: string;
    /**
     * ID of the associated program.
     */
    watchlistProgramId?: string;
}
