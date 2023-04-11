import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
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
     * The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
     */
    idpId?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The parent resource name where the config to be created, for example: "projects/my-awesome-project"
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
export declare class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig?: shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
