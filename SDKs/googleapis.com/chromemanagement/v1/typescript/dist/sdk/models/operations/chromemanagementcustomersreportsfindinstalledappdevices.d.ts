import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Type of the app.
 */
export declare enum ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesRequest extends SpeakeasyBase {
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
     * Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).
     */
    appId?: string;
    /**
     * Type of the app.
     */
    appType?: ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. Customer id or "my_customer" to use the customer associated to the account making the request.
     */
    customer: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date
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
     * Field used to order results. Supported order by fields: * machine * device_id
     */
    orderBy?: string;
    /**
     * The ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the request to be returned.
     */
    pageToken?: string;
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
export declare class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleChromeManagementV1FindInstalledAppDevicesResponse?: shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
