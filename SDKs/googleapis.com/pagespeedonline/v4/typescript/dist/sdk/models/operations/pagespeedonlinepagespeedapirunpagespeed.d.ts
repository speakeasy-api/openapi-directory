import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The analysis strategy (desktop or mobile) to use, and desktop is the default
 */
export declare enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    Desktop = "desktop",
    Mobile = "mobile"
}
export declare class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Indicates if third party resources should be filtered out before PageSpeed analysis.
     */
    filterThirdPartyResources?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The locale used to localize formatted results
     */
    locale?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * A PageSpeed rule to run; if none are given, all rules are run
     */
    rule?: string[];
    /**
     * Indicates if binary data containing a screenshot should be included
     */
    screenshot?: boolean;
    /**
     * Indicates if binary data containing snapshot images should be included
     */
    snapshots?: boolean;
    /**
     * The analysis strategy (desktop or mobile) to use, and desktop is the default
     */
    strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
    /**
     * The URL to fetch and analyze
     */
    url: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Campaign name for analytics.
     */
    utmCampaign?: string;
    /**
     * Campaign source for analytics.
     */
    utmSource?: string;
}
export declare class PagespeedonlinePagespeedapiRunpagespeedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
