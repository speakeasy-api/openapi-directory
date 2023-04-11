import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1;
    option2?: IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2;
}
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudIdentitytoolkitAdminV2InboundSamlConfigInput?: shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput;
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
     * The id to use for this config.
     */
    inboundSamlConfigId?: string;
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
export declare class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIdentitytoolkitAdminV2InboundSamlConfig?: shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
