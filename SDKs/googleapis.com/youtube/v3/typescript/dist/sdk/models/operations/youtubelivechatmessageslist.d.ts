import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeLiveChatMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveChatMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveChatMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeLiveChatMessagesListSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveChatMessagesListSecurityOption1;
    option2?: YoutubeLiveChatMessagesListSecurityOption2;
    option3?: YoutubeLiveChatMessagesListSecurityOption3;
}
export declare class YoutubeLiveChatMessagesListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Specifies the localization language in which the system messages should be returned.
     */
    hl?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The id of the live chat for which comments should be returned.
     */
    liveChatId: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Specifies the size of the profile image that should be returned for each user.
     */
    profileImageSize?: number;
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
export declare class YoutubeLiveChatMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    liveChatMessageListResponse?: shared.LiveChatMessageListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
