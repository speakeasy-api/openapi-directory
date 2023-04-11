import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryProjectsGetServiceAccountSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryProjectsGetServiceAccountSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryProjectsGetServiceAccountSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryProjectsGetServiceAccountSecurity extends SpeakeasyBase {
    option1?: BigqueryProjectsGetServiceAccountSecurityOption1;
    option2?: BigqueryProjectsGetServiceAccountSecurityOption2;
    option3?: BigqueryProjectsGetServiceAccountSecurityOption3;
}
export declare class BigqueryProjectsGetServiceAccountRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * Project ID for which the service account is requested.
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class BigqueryProjectsGetServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getServiceAccountResponse?: shared.GetServiceAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
