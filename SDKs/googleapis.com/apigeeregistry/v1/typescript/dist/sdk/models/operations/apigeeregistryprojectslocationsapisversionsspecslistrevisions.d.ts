import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest extends SpeakeasyBase {
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
     * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The name of the spec to list revisions for.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of revisions to return per page.
     */
    pageSize?: number;
    /**
     * The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listApiSpecRevisionsResponse?: shared.ListApiSpecRevisionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
