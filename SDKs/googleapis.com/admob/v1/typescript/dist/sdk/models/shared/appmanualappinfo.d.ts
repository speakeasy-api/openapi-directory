import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
 */
export declare class AppManualAppInfo extends SpeakeasyBase {
    /**
     * The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.
     */
    displayName?: string;
}
