import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsupportProjectsCasesAttachmentsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsupportProjectsCasesAttachmentsListRequest extends SpeakeasyBase {
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The resource name of Case object for which attachments should be listed.
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
export declare class CloudsupportProjectsCasesAttachmentsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAttachmentsResponse?: shared.ListAttachmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
