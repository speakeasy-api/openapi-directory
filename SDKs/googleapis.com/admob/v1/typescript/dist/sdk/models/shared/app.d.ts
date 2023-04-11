import { SpeakeasyBase } from "../../../internal/utils";
import { AppLinkedAppInfo } from "./applinkedappinfo";
import { AppManualAppInfo } from "./appmanualappinfo";
/**
 * Output only. The approval state for the app.
 */
export declare enum AppAppApprovalStateEnum {
    AppApprovalStateUnspecified = "APP_APPROVAL_STATE_UNSPECIFIED",
    ActionRequired = "ACTION_REQUIRED",
    InReview = "IN_REVIEW",
    Approved = "APPROVED"
}
/**
 * Describes an AdMob app for a specific platform (For example: Android or iOS).
 */
export declare class App extends SpeakeasyBase {
    /**
     * Output only. The approval state for the app.
     */
    appApprovalState?: AppAppApprovalStateEnum;
    /**
     * The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789
     */
    appId?: string;
    /**
     * Information from the app store if the app is linked to an app store.
     */
    linkedAppInfo?: AppLinkedAppInfo;
    /**
     * Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).
     */
    manualAppInfo?: AppManualAppInfo;
    /**
     * Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789
     */
    name?: string;
    /**
     * Describes the platform of the app. Limited to "IOS" and "ANDROID".
     */
    platform?: string;
}
