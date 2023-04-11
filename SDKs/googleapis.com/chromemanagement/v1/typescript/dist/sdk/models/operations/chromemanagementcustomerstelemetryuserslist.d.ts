import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChromemanagementCustomersTelemetryUsersListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromemanagementCustomersTelemetryUsersListRequest extends SpeakeasyBase {
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
     * Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of results to return. Default value is 100. Maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Token to specify next page in the list.
     */
    pageToken?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
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
     * Read mask to specify which fields to return.
     */
    readMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersTelemetryUsersListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleChromeManagementV1ListTelemetryUsersResponse?: shared.GoogleChromeManagementV1ListTelemetryUsersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
