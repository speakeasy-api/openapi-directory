import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest extends SpeakeasyBase {
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
     * Optional. Only include resources that match the filter in the response.
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
     * Optional. Specify how the results should be sorted.
     */
    orderBy?: string;
    /**
     * Optional. Limit on the number of CertificateAuthorities to include in the response. Further CertificateAuthorities can subsequently be obtained by including the ListCertificateAuthoritiesResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token, returned earlier via ListCertificateAuthoritiesResponse.next_page_token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the CaPool associated with the CertificateAuthorities, in the format `projects/* /locations/* /caPools/*`.
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
export declare class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
