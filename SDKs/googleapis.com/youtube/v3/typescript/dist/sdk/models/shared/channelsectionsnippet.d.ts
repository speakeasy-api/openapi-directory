import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
/**
 * The style of the channel section.
 */
export declare enum ChannelSectionSnippetStyleEnum {
    ChannelsectionStyleUnspecified = "channelsectionStyleUnspecified",
    HorizontalRow = "horizontalRow",
    VerticalList = "verticalList"
}
/**
 * The type of the channel section.
 */
export declare enum ChannelSectionSnippetTypeEnum {
    ChannelsectionTypeUndefined = "channelsectionTypeUndefined",
    SinglePlaylist = "singlePlaylist",
    MultiplePlaylists = "multiplePlaylists",
    PopularUploads = "popularUploads",
    RecentUploads = "recentUploads",
    Likes = "likes",
    AllPlaylists = "allPlaylists",
    LikedPlaylists = "likedPlaylists",
    RecentPosts = "recentPosts",
    RecentActivity = "recentActivity",
    LiveEvents = "liveEvents",
    UpcomingEvents = "upcomingEvents",
    CompletedEvents = "completedEvents",
    MultipleChannels = "multipleChannels",
    PostedVideos = "postedVideos",
    PostedPlaylists = "postedPlaylists",
    Subscriptions = "subscriptions"
}
/**
 * Basic details about a channel section, including title, style and position.
 */
export declare class ChannelSectionSnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the channel section.
     */
    channelId?: string;
    /**
     * The language of the channel section's default title and description.
     */
    defaultLanguage?: string;
    /**
     * ChannelSection localization setting
     */
    localized?: ChannelSectionLocalization;
    /**
     * The position of the channel section in the channel.
     */
    position?: number;
    /**
     * The style of the channel section.
     */
    style?: ChannelSectionSnippetStyleEnum;
    /**
     * The channel section's title for multiple_playlists and multiple_channels.
     */
    title?: string;
    /**
     * The type of the channel section.
     */
    type?: ChannelSectionSnippetTypeEnum;
}
