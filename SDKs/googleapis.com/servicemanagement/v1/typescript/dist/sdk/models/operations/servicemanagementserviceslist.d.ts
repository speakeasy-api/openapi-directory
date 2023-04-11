import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicemanagementServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ServicemanagementServicesListSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesListSecurityOption1;
    option2?: ServicemanagementServicesListSecurityOption2;
    option3?: ServicemanagementServicesListSecurityOption3;
    option4?: ServicemanagementServicesListSecurityOption4;
}
export declare class ServicemanagementServicesListRequest extends SpeakeasyBase {
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
     * Include services consumed by the specified consumer. The Google Service Management implementation accepts the following forms: - project:
     */
    consumerId?: string;
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
     * The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 500.
     */
    pageSize?: number;
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Include services produced by the specified project.
     */
    producerProjectId?: string;
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
export declare class ServicemanagementServicesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
