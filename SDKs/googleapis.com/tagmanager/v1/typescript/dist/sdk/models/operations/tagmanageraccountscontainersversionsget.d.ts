import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class TagmanagerAccountsContainersVersionsGetSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersVersionsGetSecurityOption1;
    option2?: TagmanagerAccountsContainersVersionsGetSecurityOption2;
    option3?: TagmanagerAccountsContainersVersionsGetSecurityOption3;
}
export declare class TagmanagerAccountsContainersVersionsGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * The GTM Account ID.
     */
    accountId: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The GTM Container ID.
     */
    containerId: string;
    /**
     * The GTM Container Version ID. Specify published to retrieve the currently published version.
     */
    containerVersionId: string;
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
export declare class TagmanagerAccountsContainersVersionsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
