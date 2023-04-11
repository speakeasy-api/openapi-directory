import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MybusinessAccountsLocationsQuestionsListRequest extends SpeakeasyBase {
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
     * How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.
     */
    answersPerQuestion?: number;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"
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
     * The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.
     */
    orderBy?: string;
    /**
     * How many questions to fetch per page. The default and maximum `page_size` values are 10.
     */
    pageSize?: number;
    /**
     * If specified, the next page of questions is retrieved.
     */
    pageToken?: string;
    /**
     * The name of the location to fetch questions for.
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
}
export declare class MybusinessAccountsLocationsQuestionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listQuestionsResponse?: shared.ListQuestionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
