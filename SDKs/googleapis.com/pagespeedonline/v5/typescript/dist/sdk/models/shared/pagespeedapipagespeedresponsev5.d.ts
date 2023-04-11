import { SpeakeasyBase } from "../../../internal/utils";
import { LighthouseResultV5 } from "./lighthouseresultv5";
import { PagespeedApiLoadingExperienceV5 } from "./pagespeedapiloadingexperiencev5";
import { PagespeedVersion } from "./pagespeedversion";
/**
 * The Pagespeed API response object.
 */
export declare class PagespeedApiPagespeedResponseV5 extends SpeakeasyBase {
    /**
     * The UTC timestamp of this analysis.
     */
    analysisUTCTimestamp?: string;
    /**
     * The captcha verify result
     */
    captchaResult?: string;
    /**
     * Canonicalized and final URL for the document, after following page redirects (if any).
     */
    id?: string;
    /**
     * Kind of result.
     */
    kind?: string;
    /**
     * The Lighthouse result object.
     */
    lighthouseResult?: LighthouseResultV5;
    /**
     * The CrUX loading experience object that contains CrUX data breakdowns.
     */
    loadingExperience?: PagespeedApiLoadingExperienceV5;
    /**
     * The CrUX loading experience object that contains CrUX data breakdowns.
     */
    originLoadingExperience?: PagespeedApiLoadingExperienceV5;
    /**
     * The Pagespeed Version object.
     */
    version?: PagespeedVersion;
}
