import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeSecurity extends SpeakeasyBase {
    option1?: DeploymentmanagerTypeProvidersGetTypeSecurityOption1;
    option2?: DeploymentmanagerTypeProvidersGetTypeSecurityOption2;
    option3?: DeploymentmanagerTypeProvidersGetTypeSecurityOption3;
    option4?: DeploymentmanagerTypeProvidersGetTypeSecurityOption4;
}
export declare class DeploymentmanagerTypeProvidersGetTypeRequest extends SpeakeasyBase {
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
     * The name of the type provider type for this request.
     */
    type: string;
    /**
     * The name of the type provider for this request.
     */
    typeProvider: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DeploymentmanagerTypeProvidersGetTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    typeInfo?: shared.TypeInfo;
}
