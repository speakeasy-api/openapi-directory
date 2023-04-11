import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerExperienceInfo } from "./playerexperienceinfo";
import { ProfileSettings } from "./profilesettings";
/**
 * The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game.
 */
export declare enum PlayerFriendStatusEnum {
    FriendStatusUnspecified = "FRIEND_STATUS_UNSPECIFIED",
    NoRelationship = "NO_RELATIONSHIP",
    Friend = "FRIEND"
}
/**
 * A representation of the individual components of the name.
 */
export declare class PlayerName extends SpeakeasyBase {
    /**
     * The family name of this player. In some places, this is known as the last name.
     */
    familyName?: string;
    /**
     * The given name of this player. In some places, this is known as the first name.
     */
    givenName?: string;
}
/**
 * A Player resource.
 */
export declare class Player extends SpeakeasyBase {
    /**
     * The base URL for the image that represents the player.
     */
    avatarImageUrl?: string;
    /**
     * The url to the landscape mode player banner image.
     */
    bannerUrlLandscape?: string;
    /**
     * The url to the portrait mode player banner image.
     */
    bannerUrlPortrait?: string;
    /**
     * The name to display for the player.
     */
    displayName?: string;
    /**
     * 1P/3P metadata about the player's experience.
     */
    experienceInfo?: PlayerExperienceInfo;
    /**
     * The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game.
     */
    friendStatus?: PlayerFriendStatusEnum;
    /**
     * Per-application unique player identifier.
     */
    gamePlayerId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#player`
     */
    kind?: string;
    /**
     * A representation of the individual components of the name.
     */
    name?: PlayerName;
    /**
     * The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
     */
    originalPlayerId?: string;
    /**
     * The ID of the player.
     */
    playerId?: string;
    /**
     * Profile settings
     */
    profileSettings?: ProfileSettings;
    /**
     * The player's title rewarded for their game activities.
     */
    title?: string;
}
