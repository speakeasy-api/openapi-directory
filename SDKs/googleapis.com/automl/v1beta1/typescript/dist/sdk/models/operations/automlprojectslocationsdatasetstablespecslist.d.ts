import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AutomlProjectsLocationsDatasetsTableSpecsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsListRequest extends SpeakeasyBase {
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
     * Mask specifying which fields to read.
     */
    fieldMask?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Filter expression, see go/filtering.
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
     * Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results for the server to return. Typically obtained from the ListTableSpecsResponse.next_page_token field of the previous AutoMl.ListTableSpecs call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the dataset to list table specs from.
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
export declare class AutomlProjectsLocationsDatasetsTableSpecsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listTableSpecsResponse?: shared.ListTableSpecsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
