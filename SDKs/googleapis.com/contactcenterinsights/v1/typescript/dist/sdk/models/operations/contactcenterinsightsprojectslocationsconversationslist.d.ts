import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContactcenterinsightsProjectsLocationsConversationsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The level of details of the conversation. Default is `BASIC`.
 */
export declare enum ContactcenterinsightsProjectsLocationsConversationsListViewEnum {
    ConversationViewUnspecified = "CONVERSATION_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListRequest extends SpeakeasyBase {
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
     * A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of conversations to return in the response. A valid page size ranges from 0 to 1,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the conversation.
     */
    parent: string;
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
    /**
     * The level of details of the conversation. Default is `BASIC`.
     */
    view?: ContactcenterinsightsProjectsLocationsConversationsListViewEnum;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudContactcenterinsightsV1ListConversationsResponse?: shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
