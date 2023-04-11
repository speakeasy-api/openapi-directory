import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PagespeedonlinePagespeedapiRunpagespeedSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum PagespeedonlinePagespeedapiRunpagespeedCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Accessibility = "ACCESSIBILITY",
    BestPractices = "BEST_PRACTICES",
    Performance = "PERFORMANCE",
    Pwa = "PWA",
    Seo = "SEO"
}
/**
 * The analysis strategy (desktop or mobile) to use, and desktop is the default
 */
export declare enum PagespeedonlinePagespeedapiRunpagespeedStrategyEnum {
    StrategyUnspecified = "STRATEGY_UNSPECIFIED",
    Desktop = "DESKTOP",
    Mobile = "MOBILE"
}
export declare class PagespeedonlinePagespeedapiRunpagespeedRequest extends SpeakeasyBase {
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
     * The captcha token passed when filling out a captcha.
     */
    captchaToken?: string;
    /**
     * A Lighthouse category to run; if none are given, only Performance category will be run
     */
    category?: PagespeedonlinePagespeedapiRunpagespeedCategoryEnum[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The analysis strategy (desktop or mobile) to use, and desktop is the default
     */
    strategy?: PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Required. The URL to fetch and analyze
     */
    url: string;
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
    contentType: string;
    /**
     * Successful response
     */
    pagespeedApiPagespeedResponseV5?: shared.PagespeedApiPagespeedResponseV5;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
