import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsearchStatsGetSearchapplicationSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsGetSearchapplicationSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsGetSearchapplicationSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsGetSearchapplicationSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetSearchapplicationSecurityOption1;
    option2?: CloudsearchStatsGetSearchapplicationSecurityOption2;
    option3?: CloudsearchStatsGetSearchapplicationSecurityOption3;
}
export declare class CloudsearchStatsGetSearchapplicationRequest extends SpeakeasyBase {
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
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    endDateDay?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    endDateMonth?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    endDateYear?: number;
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
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    startDateDay?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    startDateMonth?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    startDateYear?: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudsearchStatsGetSearchapplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getCustomerSearchApplicationStatsResponse?: shared.GetCustomerSearchApplicationStatsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
