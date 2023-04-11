import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";
/**
 * Contains information about a landing page deep link.
 */
export declare class DeepLink extends SpeakeasyBase {
    /**
     * The URL of the mobile app being linked to.
     */
    appUrl?: string;
    /**
     * The fallback URL. This URL will be served to users who do not have the mobile app installed.
     */
    fallbackUrl?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink".
     */
    kind?: string;
    /**
     * Contains information about a mobile app. Used as a landing page deep link.
     */
    mobileApp?: MobileApp;
    /**
     * Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE.
     */
    remarketingListIds?: string[];
}
