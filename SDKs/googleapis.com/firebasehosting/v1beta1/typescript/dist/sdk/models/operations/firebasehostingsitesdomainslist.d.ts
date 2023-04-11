import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebasehostingSitesDomainsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesDomainsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesDomainsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesDomainsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebasehostingSitesDomainsListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesDomainsListSecurityOption1;
    option2?: FirebasehostingSitesDomainsListSecurityOption2;
    option3?: FirebasehostingSitesDomainsListSecurityOption3;
    option4?: FirebasehostingSitesDomainsListSecurityOption4;
}
export declare class FirebasehostingSitesDomainsListRequest extends SpeakeasyBase {
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
     * The page size to return. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list domains, in the format: sites/ site-name
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
export declare class FirebasehostingSitesDomainsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
