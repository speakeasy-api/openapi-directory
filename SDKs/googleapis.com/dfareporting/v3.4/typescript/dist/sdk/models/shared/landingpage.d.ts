import { SpeakeasyBase } from "../../../internal/utils";
import { DeepLink } from "./deeplink";
/**
 * Contains information about where a user's browser is taken after the user clicks an ad.
 */
export declare class LandingPage extends SpeakeasyBase {
    /**
     * Advertiser ID of this landing page. This is a required field.
     */
    advertiserId?: string;
    /**
     * Whether this landing page has been archived.
     */
    archived?: boolean;
    /**
     * Links that will direct the user to a mobile app, if installed.
     */
    deepLinks?: DeepLink[];
    /**
     * ID of this landing page. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
     */
    kind?: string;
    /**
     * Name of this landing page. This is a required field. It must be less than 256 characters long.
     */
    name?: string;
    /**
     * URL of this landing page. This is a required field.
     */
    url?: string;
}
