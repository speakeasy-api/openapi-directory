import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Listing extends SpeakeasyBase {
    /**
     * Full description of the app; this may be up to 4000 characters in length.
     */
    fullDescription?: string;
    /**
     * Language localization code (for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * Short description of the app (previously known as promo text); this may be up to 80 characters in length.
     */
    shortDescription?: string;
    /**
     * App's localized title.
     */
    title?: string;
    /**
     * URL of a promotional YouTube video for the app.
     */
    video?: string;
}
