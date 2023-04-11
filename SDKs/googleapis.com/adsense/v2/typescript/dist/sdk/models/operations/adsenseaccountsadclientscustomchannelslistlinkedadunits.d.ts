import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1;
    option2?: AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2;
}
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListLinkedAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedAdUnits` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The custom channel which owns the collection of ad units. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
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
export declare class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listLinkedAdUnitsResponse?: shared.ListLinkedAdUnitsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
