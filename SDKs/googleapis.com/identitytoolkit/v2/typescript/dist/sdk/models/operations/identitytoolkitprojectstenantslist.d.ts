import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IdentitytoolkitProjectsTenantsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsListSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsListSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsListSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsListRequest extends SpeakeasyBase {
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
     * The maximum number of results to return, capped at 1000. If not specified, the default value is 20.
     */
    pageSize?: number;
    /**
     * The pagination token from the response of a previous request.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name to list tenants for.
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
export declare class IdentitytoolkitProjectsTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIdentitytoolkitAdminV2ListTenantsResponse?: shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
