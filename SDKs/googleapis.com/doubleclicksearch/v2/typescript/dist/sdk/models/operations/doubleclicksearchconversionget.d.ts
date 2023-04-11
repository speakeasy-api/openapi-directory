import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DoubleclicksearchConversionGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DoubleclicksearchConversionGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Numeric ID of the ad group.
     */
    adGroupId?: string;
    /**
     * Numeric ID of the ad.
     */
    adId?: string;
    /**
     * Numeric ID of the advertiser.
     */
    advertiserId: string;
    /**
     * Numeric ID of the agency.
     */
    agencyId: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Numeric ID of the campaign.
     */
    campaignId?: string;
    /**
     * Numeric ID of the criterion.
     */
    criterionId?: string;
    /**
     * Customer ID of a client account in the new Search Ads 360 experience.
     */
    customerId?: string;
    /**
     * Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     */
    endDate: number;
    /**
     * Numeric ID of the engine account.
     */
    engineAccountId: string;
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
     * The number of conversions to return per call.
     */
    rowCount: number;
    /**
     * First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     */
    startDate: number;
    /**
     * The 0-based starting index for retrieving conversions results.
     */
    startRow: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DoubleclicksearchConversionGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    conversionList?: shared.ConversionList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
