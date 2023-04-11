import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
export declare enum UserDeveloperAccountPermissionsEnum {
    DeveloperLevelPermissionUnspecified = "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED",
    CanSeeAllApps = "CAN_SEE_ALL_APPS",
    CanViewFinancialDataGlobal = "CAN_VIEW_FINANCIAL_DATA_GLOBAL",
    CanManagePermissionsGlobal = "CAN_MANAGE_PERMISSIONS_GLOBAL",
    CanEditGamesGlobal = "CAN_EDIT_GAMES_GLOBAL",
    CanPublishGamesGlobal = "CAN_PUBLISH_GAMES_GLOBAL",
    CanReplyToReviewsGlobal = "CAN_REPLY_TO_REVIEWS_GLOBAL",
    CanManagePublicApksGlobal = "CAN_MANAGE_PUBLIC_APKS_GLOBAL",
    CanManageTrackApksGlobal = "CAN_MANAGE_TRACK_APKS_GLOBAL",
    CanManageTrackUsersGlobal = "CAN_MANAGE_TRACK_USERS_GLOBAL",
    CanManagePublicListingGlobal = "CAN_MANAGE_PUBLIC_LISTING_GLOBAL",
    CanManageDraftAppsGlobal = "CAN_MANAGE_DRAFT_APPS_GLOBAL",
    CanCreateManagedPlayAppsGlobal = "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL",
    CanChangeManagedPlaySettingGlobal = "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL",
    CanManageOrdersGlobal = "CAN_MANAGE_ORDERS_GLOBAL"
}
/**
 * A user resource.
 */
export declare class UserInput extends SpeakeasyBase {
    /**
     * Permissions for the user which apply across the developer account.
     */
    developerAccountPermissions?: UserDeveloperAccountPermissionsEnum[];
    /**
     * Immutable. The user's email address.
     */
    email?: string;
    /**
     * The time at which the user's access expires, if set. When setting this value, it must always be in the future.
     */
    expirationTime?: string;
    /**
     * Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".
     */
    name?: string;
}
/**
 * Output only. The state of the user's access to the Play Console.
 */
export declare enum UserAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Invited = "INVITED",
    InvitationExpired = "INVITATION_EXPIRED",
    AccessGranted = "ACCESS_GRANTED",
    AccessExpired = "ACCESS_EXPIRED"
}
/**
 * A user resource.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Output only. The state of the user's access to the Play Console.
     */
    accessState?: UserAccessStateEnum;
    /**
     * Permissions for the user which apply across the developer account.
     */
    developerAccountPermissions?: UserDeveloperAccountPermissionsEnum[];
    /**
     * Immutable. The user's email address.
     */
    email?: string;
    /**
     * The time at which the user's access expires, if set. When setting this value, it must always be in the future.
     */
    expirationTime?: string;
    /**
     * Output only. Per-app permissions for the user.
     */
    grants?: Grant[];
    /**
     * Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".
     */
    name?: string;
    /**
     * Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner.
     */
    partial?: boolean;
}
