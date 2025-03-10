import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DocumentaiProjectsLocationsProcessorsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DocumentaiProjectsLocationsProcessorsListRequest extends SpeakeasyBase {
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
     * The maximum number of processors to return. If unspecified, at most 50 processors will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * We will return the processors sorted by creation time. The page token will point to the next processor.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`
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
export declare class DocumentaiProjectsLocationsProcessorsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDocumentaiV1ListProcessorsResponse?: shared.GoogleCloudDocumentaiV1ListProcessorsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
