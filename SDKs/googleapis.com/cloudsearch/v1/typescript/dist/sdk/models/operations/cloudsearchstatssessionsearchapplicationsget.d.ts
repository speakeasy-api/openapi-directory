import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;
    option2?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;
    option3?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetRequest extends SpeakeasyBase {
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
     * Day of month. Must be from 1 to 31 and valid for the year and month.
     */
    fromDateDay?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    fromDateMonth?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    fromDateYear?: number;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The resource id of the search application session stats, in the following format: searchapplications/{application_id}
     */
    name: string;
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
    toDateDay?: number;
    /**
     * Month of date. Must be from 1 to 12.
     */
    toDateMonth?: number;
    /**
     * Year of date. Must be from 1 to 9999.
     */
    toDateYear?: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getSearchApplicationSessionStatsResponse?: shared.GetSearchApplicationSessionStatsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
