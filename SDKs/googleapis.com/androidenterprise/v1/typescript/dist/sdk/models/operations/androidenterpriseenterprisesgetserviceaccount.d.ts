import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidenterpriseEnterprisesGetServiceAccountSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The type of credential to return with the service account. Required.
 */
export declare enum AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials",
    Pkcs12 = "pkcs12"
}
export declare class AndroidenterpriseEnterprisesGetServiceAccountRequest extends SpeakeasyBase {
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
     * The ID of the enterprise.
     */
    enterpriseId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The type of credential to return with the service account. Required.
     */
    keyType?: AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;
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
export declare class AndroidenterpriseEnterprisesGetServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
