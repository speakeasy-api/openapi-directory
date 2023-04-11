import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DriveRepliesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRepliesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRepliesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DriveRepliesListSecurity extends SpeakeasyBase {
    option1?: DriveRepliesListSecurityOption1;
    option2?: DriveRepliesListSecurityOption2;
    option3?: DriveRepliesListSecurityOption3;
}
export declare class DriveRepliesListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the comment.
     */
    commentId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the file.
     */
    fileId: string;
    /**
     * If set, all replies, including deleted replies (with content stripped) will be returned.
     */
    includeDeleted?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of replies to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class DriveRepliesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    commentReplyList?: shared.CommentReplyList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
