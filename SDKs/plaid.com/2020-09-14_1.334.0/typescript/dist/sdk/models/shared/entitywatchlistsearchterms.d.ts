import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search inputs for creating an entity watchlist screening
 */
export declare class EntityWatchlistSearchTerms extends SpeakeasyBase {
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
    legalName: string;
    /**
     * A phone number in E.164 format.
     */
    phoneNumber?: string;
    /**
     * An 'http' or 'https' URL (must begin with either of those).
     */
    url?: string;
}
