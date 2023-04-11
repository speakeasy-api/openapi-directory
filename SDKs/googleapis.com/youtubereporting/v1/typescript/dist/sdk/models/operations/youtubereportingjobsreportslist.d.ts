import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubereportingJobsReportsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubereportingJobsReportsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubereportingJobsReportsListSecurity extends SpeakeasyBase {
    option1?: YoutubereportingJobsReportsListSecurityOption1;
    option2?: YoutubereportingJobsReportsListSecurityOption2;
}
export declare class YoutubereportingJobsReportsListRequest extends SpeakeasyBase {
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
     * If set, only reports created after the specified date/time are returned.
     */
    createdAfter?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The ID of the job.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     */
    onBehalfOfContentOwner?: string;
    /**
     * Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set, only reports whose start time is greater than or equal the specified date/time are returned.
     */
    startTimeAtOrAfter?: string;
    /**
     * If set, only reports whose start time is smaller than the specified date/time are returned.
     */
    startTimeBefore?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class YoutubereportingJobsReportsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listReportsResponse?: shared.ListReportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
