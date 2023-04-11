import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A localized store listing. The resource for ListingsService.
 */
export declare class Listing extends SpeakeasyBase {
    /**
     * Full description of the app.
     */
    fullDescription?: string;
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Short description of the app.
     */
    shortDescription?: string;
    /**
     * Localized title of the app.
     */
    title?: string;
    /**
     * URL of a promotional YouTube video for the app.
     */
    video?: string;
}
