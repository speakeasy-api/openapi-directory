import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search terms for editing an entity watchlist screening
 */
export declare class UpdateEntityScreeningRequestSearchTerms extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId: string;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     */
    country?: string;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     */
    documentNumber?: string;
    /**
     * A valid email address.
     */
    emailAddress?: string;
    /**
     * ID of the associated entity program.
     */
    entityWatchlistProgramId: string;
    /**
     * The name of the organization being screened.
     */
    legalName?: string;
    /**
     * A phone number in E.164 format.
     */
    phoneNumber?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret: string;
    /**
     * An 'http' or 'https' URL (must begin with either of those).
     */
    url?: string;
}
