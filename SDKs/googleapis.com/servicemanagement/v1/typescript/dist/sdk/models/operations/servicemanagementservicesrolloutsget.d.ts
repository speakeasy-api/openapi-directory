import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicemanagementServicesRolloutsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesRolloutsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesRolloutsGetSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesRolloutsGetSecurityOption1;
    option2?: ServicemanagementServicesRolloutsGetSecurityOption2;
    option3?: ServicemanagementServicesRolloutsGetSecurityOption3;
    option4?: ServicemanagementServicesRolloutsGetSecurityOption4;
}
export declare class ServicemanagementServicesRolloutsGetRequest extends SpeakeasyBase {
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The id of the rollout resource.
     */
    rolloutId: string;
    /**
     * Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     */
    serviceName: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ServicemanagementServicesRolloutsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    rollout?: shared.Rollout;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
