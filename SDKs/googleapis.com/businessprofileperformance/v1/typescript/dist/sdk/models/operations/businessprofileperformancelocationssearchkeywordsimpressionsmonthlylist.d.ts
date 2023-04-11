import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest extends SpeakeasyBase {
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
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    monthlyRangeEndMonthDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    monthlyRangeEndMonthMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    monthlyRangeEndMonthYear?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    monthlyRangeStartMonthDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    monthlyRangeStartMonthMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    monthlyRangeStartMonthYear?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.
     */
    pageSize?: number;
    /**
     * Optional. A token indicating the next paginated result to be returned.
     */
    pageToken?: string;
    /**
     * Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSearchKeywordImpressionsMonthlyResponse?: shared.ListSearchKeywordImpressionsMonthlyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
