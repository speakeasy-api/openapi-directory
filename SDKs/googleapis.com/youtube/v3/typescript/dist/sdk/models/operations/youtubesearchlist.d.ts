import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeSearchListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeSearchListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeSearchListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeSearchListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeSearchListSecurity extends SpeakeasyBase {
    option1?: YoutubeSearchListSecurityOption1;
    option2?: YoutubeSearchListSecurityOption2;
    option3?: YoutubeSearchListSecurityOption3;
    option4?: YoutubeSearchListSecurityOption4;
}
/**
 * Add a filter on the channel search.
 */
export declare enum YoutubeSearchListChannelTypeEnum {
    ChannelTypeUnspecified = "channelTypeUnspecified",
    Any = "any",
    Show = "show"
}
/**
 * Filter on the livestream status of the videos.
 */
export declare enum YoutubeSearchListEventTypeEnum {
    None = "none",
    Upcoming = "upcoming",
    Live = "live",
    Completed = "completed"
}
/**
 * Sort order of the results.
 */
export declare enum YoutubeSearchListOrderEnum {
    SearchSortUnspecified = "searchSortUnspecified",
    Date = "date",
    Rating = "rating",
    ViewCount = "viewCount",
    Relevance = "relevance",
    Title = "title",
    VideoCount = "videoCount"
}
/**
 * Indicates whether the search results should include restricted content as well as standard content.
 */
export declare enum YoutubeSearchListSafeSearchEnum {
    SafeSearchSettingUnspecified = "safeSearchSettingUnspecified",
    None = "none",
    Moderate = "moderate",
    Strict = "strict"
}
/**
 * Filter on the presence of captions on the videos.
 */
export declare enum YoutubeSearchListVideoCaptionEnum {
    VideoCaptionUnspecified = "videoCaptionUnspecified",
    Any = "any",
    ClosedCaption = "closedCaption",
    None = "none"
}
/**
 * Filter on the definition of the videos.
 */
export declare enum YoutubeSearchListVideoDefinitionEnum {
    Any = "any",
    Standard = "standard",
    High = "high"
}
/**
 * Filter on 3d videos.
 */
export declare enum YoutubeSearchListVideoDimensionEnum {
    Any = "any",
    Twod = "2d",
    Threed = "3d"
}
/**
 * Filter on the duration of the videos.
 */
export declare enum YoutubeSearchListVideoDurationEnum {
    VideoDurationUnspecified = "videoDurationUnspecified",
    Any = "any",
    Short = "short",
    Medium = "medium",
    Long = "long"
}
/**
 * Filter on embeddable videos.
 */
export declare enum YoutubeSearchListVideoEmbeddableEnum {
    VideoEmbeddableUnspecified = "videoEmbeddableUnspecified",
    Any = "any",
    True = "true"
}
/**
 * Filter on the license of the videos.
 */
export declare enum YoutubeSearchListVideoLicenseEnum {
    Any = "any",
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}
/**
 * Filter on syndicated videos.
 */
export declare enum YoutubeSearchListVideoSyndicatedEnum {
    VideoSyndicatedUnspecified = "videoSyndicatedUnspecified",
    Any = "any",
    True = "true"
}
/**
 * Filter on videos of a specific type.
 */
export declare enum YoutubeSearchListVideoTypeEnum {
    VideoTypeUnspecified = "videoTypeUnspecified",
    Any = "any",
    Movie = "movie",
    Episode = "episode"
}
export declare class YoutubeSearchListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Filter on resources belonging to this channelId.
     */
    channelId?: string;
    /**
     * Add a filter on the channel search.
     */
    channelType?: YoutubeSearchListChannelTypeEnum;
    /**
     * Filter on the livestream status of the videos.
     */
    eventType?: YoutubeSearchListEventTypeEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Search owned by a content owner.
     */
    forContentOwner?: boolean;
    /**
     * Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     */
    forDeveloper?: boolean;
    /**
     * Search for the private videos of the authenticated user.
     */
    forMine?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Filter on location of the video
     */
    location?: string;
    /**
     * Filter on distance from the location (specified above).
     */
    locationRadius?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Sort order of the results.
     */
    order?: YoutubeSearchListOrderEnum;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Filter on resources published after this date.
     */
    publishedAfter?: string;
    /**
     * Filter on resources published before this date.
     */
    publishedBefore?: string;
    /**
     * Textual search terms to match.
     */
    q?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Display the content as seen by viewers in this country.
     */
    regionCode?: string;
    /**
     * Search related to a resource.
     */
    relatedToVideoId?: string;
    /**
     * Return results relevant to this language.
     */
    relevanceLanguage?: string;
    /**
     * Indicates whether the search results should include restricted content as well as standard content.
     */
    safeSearch?: YoutubeSearchListSafeSearchEnum;
    /**
     * Restrict results to a particular topic.
     */
    topicId?: string;
    /**
     * Restrict results to a particular set of resource types from One Platform.
     */
    type?: string[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Filter on the presence of captions on the videos.
     */
    videoCaption?: YoutubeSearchListVideoCaptionEnum;
    /**
     * Filter on videos in a specific category.
     */
    videoCategoryId?: string;
    /**
     * Filter on the definition of the videos.
     */
    videoDefinition?: YoutubeSearchListVideoDefinitionEnum;
    /**
     * Filter on 3d videos.
     */
    videoDimension?: YoutubeSearchListVideoDimensionEnum;
    /**
     * Filter on the duration of the videos.
     */
    videoDuration?: YoutubeSearchListVideoDurationEnum;
    /**
     * Filter on embeddable videos.
     */
    videoEmbeddable?: YoutubeSearchListVideoEmbeddableEnum;
    /**
     * Filter on the license of the videos.
     */
    videoLicense?: YoutubeSearchListVideoLicenseEnum;
    /**
     * Filter on syndicated videos.
     */
    videoSyndicated?: YoutubeSearchListVideoSyndicatedEnum;
    /**
     * Filter on videos of a specific type.
     */
    videoType?: YoutubeSearchListVideoTypeEnum;
}
export declare class YoutubeSearchListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    searchListResponse?: shared.SearchListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
