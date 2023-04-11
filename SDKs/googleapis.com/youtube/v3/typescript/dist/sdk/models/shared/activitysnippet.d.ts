import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * The type of activity that the resource describes.
 */
export declare enum ActivitySnippetTypeEnum {
    TypeUnspecified = "typeUnspecified",
    Upload = "upload",
    Like = "like",
    Favorite = "favorite",
    Comment = "comment",
    Subscription = "subscription",
    PlaylistItem = "playlistItem",
    Recommendation = "recommendation",
    Bulletin = "bulletin",
    Social = "social",
    ChannelItem = "channelItem",
    PromotedItem = "promotedItem"
}
/**
 * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
 */
export declare class ActivitySnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the channel associated with the activity.
     */
    channelId?: string;
    /**
     * Channel title for the channel responsible for this activity
     */
    channelTitle?: string;
    /**
     * The description of the resource primarily associated with the activity. @mutable youtube.activities.insert
     */
    description?: string;
    /**
     * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
     */
    groupId?: string;
    /**
     * The date and time that the video was uploaded.
     */
    publishedAt?: Date;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The title of the resource primarily associated with the activity.
     */
    title?: string;
    /**
     * The type of activity that the resource describes.
     */
    type?: ActivitySnippetTypeEnum;
}
