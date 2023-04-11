import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VaultMattersSavedQueriesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersSavedQueriesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersSavedQueriesListSecurity extends SpeakeasyBase {
    option1?: VaultMattersSavedQueriesListSecurityOption1;
    option2?: VaultMattersSavedQueriesListSecurityOption2;
}
export declare class VaultMattersSavedQueriesListRequest extends SpeakeasyBase {
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
     * The ID of the matter to get the saved queries for.
     */
    matterId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of saved queries to return.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the previous response. An empty token means start from the beginning.
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
export declare class VaultMattersSavedQueriesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSavedQueriesResponse?: shared.ListSavedQueriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
