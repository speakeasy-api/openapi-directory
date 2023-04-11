import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileSettingsFriendsListVisibilityEnum {
    FriendsListVisibilityUnspecified = "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
    Visible = "VISIBLE",
    RequestRequired = "REQUEST_REQUIRED",
    Unavailable = "UNAVAILABLE"
}
/**
 * Profile settings
 */
export declare class ProfileSettings extends SpeakeasyBase {
    friendsListVisibility?: ProfileSettingsFriendsListVisibilityEnum;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`.
     */
    kind?: string;
    /**
     * Whether the player's profile is visible to the currently signed in player.
     */
    profileVisible?: boolean;
}
