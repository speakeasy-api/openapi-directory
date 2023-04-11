import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GrantAppLevelPermissionsEnum {
    AppLevelPermissionUnspecified = "APP_LEVEL_PERMISSION_UNSPECIFIED",
    CanAccessApp = "CAN_ACCESS_APP",
    CanViewFinancialData = "CAN_VIEW_FINANCIAL_DATA",
    CanManagePermissions = "CAN_MANAGE_PERMISSIONS",
    CanReplyToReviews = "CAN_REPLY_TO_REVIEWS",
    CanManagePublicApks = "CAN_MANAGE_PUBLIC_APKS",
    CanManageTrackApks = "CAN_MANAGE_TRACK_APKS",
    CanManageTrackUsers = "CAN_MANAGE_TRACK_USERS",
    CanManagePublicListing = "CAN_MANAGE_PUBLIC_LISTING",
    CanManageDraftApps = "CAN_MANAGE_DRAFT_APPS",
    CanManageOrders = "CAN_MANAGE_ORDERS"
}
/**
 * An access grant resource.
 */
export declare class Grant extends SpeakeasyBase {
    /**
     * The permissions granted to the user for this app.
     */
    appLevelPermissions?: GrantAppLevelPermissionsEnum[];
    /**
     * Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.
     */
    name?: string;
    /**
     * Immutable. The package name of the app. This will be empty for draft apps.
     */
    packageName?: string;
}
