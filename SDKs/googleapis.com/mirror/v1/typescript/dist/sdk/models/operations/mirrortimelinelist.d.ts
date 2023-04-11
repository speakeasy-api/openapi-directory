import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MirrorTimelineListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MirrorTimelineListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MirrorTimelineListSecurity extends SpeakeasyBase {
    option1?: MirrorTimelineListSecurityOption1;
    option2?: MirrorTimelineListSecurityOption2;
}
/**
 * Controls the order in which timeline items are returned.
 */
export declare enum MirrorTimelineListOrderByEnum {
    DisplayTime = "displayTime",
    WriteTime = "writeTime"
}
export declare class MirrorTimelineListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * If provided, only items with the given bundleId will be returned.
     */
    bundleId?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If true, tombstone records for deleted items will be returned.
     */
    includeDeleted?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of items to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Controls the order in which timeline items are returned.
     */
    orderBy?: MirrorTimelineListOrderByEnum;
    /**
     * Token for the page of results to return.
     */
    pageToken?: string;
    /**
     * If true, only pinned items will be returned.
     */
    pinnedOnly?: boolean;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If provided, only items with the given sourceItemId will be returned.
     */
    sourceItemId?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class MirrorTimelineListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
