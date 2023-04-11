import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceDetails } from "./spacedetails";
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
 */
export declare class SpaceInput extends SpeakeasyBase {
    /**
     * The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). For direct messages, this field may be empty. Supports up to 128 characters.
     */
    displayName?: string;
    /**
     * Resource name of the space. Format: spaces/{space}
     */
    name?: string;
    /**
     * Optional. Whether the space is a DM between a Chat app and a single human.
     */
    singleUserBotDm?: boolean;
    /**
     * Details about the space including description and rules.
     */
    spaceDetails?: SpaceDetails;
}
/**
 * Output only. The threading state in the Chat space.
 */
export declare enum SpaceSpaceThreadingStateEnum {
    SpaceThreadingStateUnspecified = "SPACE_THREADING_STATE_UNSPECIFIED",
    ThreadedMessages = "THREADED_MESSAGES",
    GroupedMessages = "GROUPED_MESSAGES",
    UnthreadedMessages = "UNTHREADED_MESSAGES"
}
/**
 * Output only. Deprecated: Use `singleUserBotDm` or `spaceType` (developer preview) instead. The type of a space.
 */
export declare enum SpaceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Room = "ROOM",
    Dm = "DM"
}
/**
 * A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
 */
export declare class Space extends SpeakeasyBase {
    /**
     * Output only. Whether the Chat app was installed by a Google Workspace administrator. Administrators can install a Chat app for their domain, organizational unit, or a group of users. Administrators can only install Chat apps for direct messaging between users and the app. To support admin install, your app must feature direct messaging.
     */
    adminInstalled?: boolean;
    /**
     * The space's display name. Required when [creating a space](https://developers.google.com/chat/api/reference/rest/v1/spaces/create). For direct messages, this field may be empty. Supports up to 128 characters.
     */
    displayName?: string;
    /**
     * Resource name of the space. Format: spaces/{space}
     */
    name?: string;
    /**
     * Optional. Whether the space is a DM between a Chat app and a single human.
     */
    singleUserBotDm?: boolean;
    /**
     * Details about the space including description and rules.
     */
    spaceDetails?: SpaceDetails;
    /**
     * Output only. The threading state in the Chat space.
     */
    spaceThreadingState?: SpaceSpaceThreadingStateEnum;
    /**
     * Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space.
     */
    threaded?: boolean;
    /**
     * Output only. Deprecated: Use `singleUserBotDm` or `spaceType` (developer preview) instead. The type of a space.
     */
    type?: SpaceTypeEnum;
}
