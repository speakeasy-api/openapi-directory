import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MybusinessAccountsLocationsInsuranceNetworksListRequest extends SpeakeasyBase {
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
     * Optional. The BCP 47 code for the language. If a language code is not provided, it defaults to English. Right now only 'en' is supported.
     */
    languageCode?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * How many insurance networks to return per page. The default value is 5000. Maximum page size is 10000.
     */
    pageSize?: number;
    /**
     * If specified, returns the next page of insurance networks.
     */
    pageToken?: string;
    /**
     * Required. The name of the location whose insurance networks will be listed. The name is in the form: accounts/{account_id}/locations/{location_id}
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
export declare class MybusinessAccountsLocationsInsuranceNetworksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listInsuranceNetworksResponse?: shared.ListInsuranceNetworksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
