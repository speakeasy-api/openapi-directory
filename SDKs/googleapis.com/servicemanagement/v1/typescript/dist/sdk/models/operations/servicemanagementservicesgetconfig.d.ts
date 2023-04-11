import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicemanagementServicesGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesGetConfigSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesGetConfigSecurityOption1;
    option2?: ServicemanagementServicesGetConfigSecurityOption2;
    option3?: ServicemanagementServicesGetConfigSecurityOption3;
    option4?: ServicemanagementServicesGetConfigSecurityOption4;
}
/**
 * Specifies which parts of the Service Config should be returned in the response.
 */
export declare enum ServicemanagementServicesGetConfigViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ServicemanagementServicesGetConfigRequest extends SpeakeasyBase {
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
     * Required. The id of the service configuration resource. This field must be specified for the server to return all fields, including `SourceInfo`.
     */
    configId?: string;
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
    /**
     * Specifies which parts of the Service Config should be returned in the response.
     */
    view?: ServicemanagementServicesGetConfigViewEnum;
}
export declare class ServicemanagementServicesGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
