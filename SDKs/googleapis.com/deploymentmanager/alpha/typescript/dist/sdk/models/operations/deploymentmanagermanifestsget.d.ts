import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeploymentmanagerManifestsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerManifestsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerManifestsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerManifestsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerManifestsGetSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerManifestsGetSecurityOption1;
    option2?: DeploymentmanagerManifestsGetSecurityOption2;
    option3?: DeploymentmanagerManifestsGetSecurityOption3;
    option4?: DeploymentmanagerManifestsGetSecurityOption4;
}
export declare class DeploymentmanagerManifestsGetRequest extends SpeakeasyBase {
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
     * The name of the deployment for this request.
     */
    deployment: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The name of the manifest for this request.
     */
    manifest: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The project ID for this request.
     */
    project: string;
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
export declare class DeploymentmanagerManifestsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    manifest?: shared.Manifest;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
