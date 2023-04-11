import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeLiveBroadcastsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveBroadcastsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveBroadcastsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveBroadcastsListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsListSecurityOption1;
    option2?: YoutubeLiveBroadcastsListSecurityOption2;
    option3?: YoutubeLiveBroadcastsListSecurityOption3;
}
/**
 * Return broadcasts with a certain status, e.g. active broadcasts.
 */
export declare enum YoutubeLiveBroadcastsListBroadcastStatusEnum {
    BroadcastStatusFilterUnspecified = "broadcastStatusFilterUnspecified",
    All = "all",
    Active = "active",
    Upcoming = "upcoming",
    Completed = "completed"
}
/**
 * Return only broadcasts with the selected type.
 */
export declare enum YoutubeLiveBroadcastsListBroadcastTypeEnum {
    BroadcastTypeFilterUnspecified = "broadcastTypeFilterUnspecified",
    All = "all",
    Event = "event",
    Persistent = "persistent"
}
export declare class YoutubeLiveBroadcastsListRequest extends SpeakeasyBase {
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
     * Return broadcasts with a certain status, e.g. active broadcasts.
     */
    broadcastStatus?: YoutubeLiveBroadcastsListBroadcastStatusEnum;
    /**
     * Return only broadcasts with the selected type.
     */
    broadcastType?: YoutubeLiveBroadcastsListBroadcastTypeEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Return broadcasts with the given ids from Stubby or Apiary.
     */
    id?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    mine?: boolean;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    liveBroadcastListResponse?: shared.LiveBroadcastListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
