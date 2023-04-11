import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListSecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;
    option2?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
}
/**
 * Limit users selection to this status.
 */
export declare enum CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListRequest extends SpeakeasyBase {
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
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    debugOptionsEnableDebugging?: boolean;
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
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id}
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
     * Limit users selection to this status.
     */
    resolutionStatusCode?: CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudsearchDebugIdentitysourcesUnmappedidsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listUnmappedIdentitiesResponse?: shared.ListUnmappedIdentitiesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
