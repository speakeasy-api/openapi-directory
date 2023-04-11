import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatacatalogProjectsLocationsTaxonomiesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesListRequest extends SpeakeasyBase {
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
     * Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.
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
     * The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50.
     */
    pageSize?: number;
    /**
     * The pagination token of the next results page. If not set, the first page is returned. The token is returned in the response to a previous list request.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the project to list the taxonomies of.
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
export declare class DatacatalogProjectsLocationsTaxonomiesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDatacatalogV1ListTaxonomiesResponse?: shared.GoogleCloudDatacatalogV1ListTaxonomiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
