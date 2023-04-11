import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChromemanagementCustomersReportsCountPrintJobsByPrinterSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ChromemanagementCustomersReportsCountPrintJobsByPrinterRequest extends SpeakeasyBase {
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
     * Required. Customer ID prefixed with "customers/" or "customers/my_customer" to use the customer associated to the account making the request.
     */
    customer: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Note: Only >= and <= comparators are supported in this filter. Supported filter fields: * complete_time
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
     * Field used to order results. If omitted, results will be ordered in ascending order of the 'printer' field. Supported order_by fields: * printer * job_count * device_count * user_count
     */
    orderBy?: string;
    /**
     * Maximum number of results to return. Maximum and default are 100.
     */
    pageSize?: number;
    /**
     * Token to specify the page of the response to be returned.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The ID of the organizational unit for printers. If specified, only data for printers from the specified organizational unit will be returned. If omitted, data for printers from all organizational units will be returned.
     */
    printerOrgUnitId?: string;
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
export declare class ChromemanagementCustomersReportsCountPrintJobsByPrinterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleChromeManagementV1CountPrintJobsByPrinterResponse?: shared.GoogleChromeManagementV1CountPrintJobsByPrinterResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
