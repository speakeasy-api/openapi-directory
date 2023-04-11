import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class AppDetails extends SpeakeasyBase {
    /**
     * The user-visible support email for this app.
     */
    contactEmail?: string;
    /**
     * The user-visible support telephone number for this app.
     */
    contactPhone?: string;
    /**
     * The user-visible website for this app.
     */
    contactWebsite?: string;
    /**
     * Default language code, in BCP 47 format (eg "en-US").
     */
    defaultLanguage?: string;
}
