import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a possible place given an autocomplete query.
 *
 * @remarks
 *
 */
export declare class PlaceSuggestion extends SpeakeasyBase {
    /**
     *   3 letter country code (ISO 3166-1)
     *
     * @remarks
     *
     */
    countryIso: string;
    /**
     * Longer form description of the place.
     *
     * @remarks
     *
     */
    descriptiveName: string;
    /**
     * Unique identifier for place
     *
     * @remarks
     *
     */
    id: string;
    /**
     * Place name
     *
     * @remarks
     *
     */
    name: string;
}
