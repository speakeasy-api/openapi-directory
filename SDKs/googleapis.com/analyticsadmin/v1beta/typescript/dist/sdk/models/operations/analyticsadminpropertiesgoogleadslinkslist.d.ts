import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
    option2?: AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksListRequest extends SpeakeasyBase {
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
     * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Example format: properties/1234
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
export declare class AnalyticsadminPropertiesGoogleAdsLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleAnalyticsAdminV1betaListGoogleAdsLinksResponse?: shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
