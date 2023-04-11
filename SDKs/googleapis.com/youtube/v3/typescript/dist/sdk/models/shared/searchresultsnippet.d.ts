import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
 */
export declare enum SearchResultSnippetLiveBroadcastContentEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
/**
 * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
 */
export declare class SearchResultSnippet extends SpeakeasyBase {
    /**
     * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
     */
    channelId?: string;
    /**
     * The title of the channel that published the resource that the search result identifies.
     */
    channelTitle?: string;
    /**
     * A description of the search result.
     */
    description?: string;
    /**
     * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
     */
    liveBroadcastContent?: SearchResultSnippetLiveBroadcastContentEnum;
    /**
     * The creation date and time of the resource that the search result identifies.
     */
    publishedAt?: Date;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The title of the search result.
     */
    title?: string;
}
