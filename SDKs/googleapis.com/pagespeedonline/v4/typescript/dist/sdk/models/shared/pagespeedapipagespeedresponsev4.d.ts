import { SpeakeasyBase } from "../../../internal/utils";
import { PagespeedApiFormatStringV4 } from "./pagespeedapiformatstringv4";
import { PagespeedApiImageV4 } from "./pagespeedapiimagev4";
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
    /**
     * List of entries that provide additional details about a single URL. Optional.
     */
    details?: PagespeedApiFormatStringV4[];
    result?: PagespeedApiFormatStringV4;
}
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
    header?: PagespeedApiFormatStringV4;
    /**
     * List of entries that provide information about URLs in the url block. Optional.
     */
    urls?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls[];
}
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
 */
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResults extends SpeakeasyBase {
    /**
     * Whether this rule is in 'beta'. Rules in beta are new rules that are being tested, which do not impact the overall score.
     */
    beta?: boolean;
    /**
     * List of rule groups that this rule belongs to. Each entry in the list is one of "SPEED", "USABILITY", or "SECURITY".
     */
    groups?: string[];
    /**
     * Localized name of the rule, intended for presentation to a user.
     */
    localizedRuleName?: string;
    /**
     * The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal.
     */
    ruleImpact?: number;
    summary?: PagespeedApiFormatStringV4;
    /**
     * List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details.
     */
    urlBlocks?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks[];
}
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
 */
export declare class PagespeedApiPagespeedResponseV4FormattedResults extends SpeakeasyBase {
    /**
     * The locale of the formattedResults, e.g. "en_US".
     */
    locale?: string;
    /**
     * Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
     */
    ruleResults?: Record<string, PagespeedApiPagespeedResponseV4FormattedResultsRuleResults>;
}
export declare class PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions extends SpeakeasyBase {
    max?: number;
    min?: number;
    proportion?: number;
}
/**
 * The type of the metric.
 */
export declare class PagespeedApiPagespeedResponseV4LoadingExperienceMetrics extends SpeakeasyBase {
    category?: string;
    distributions?: PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions[];
    median?: number;
}
/**
 * Metrics of end users' page loading experience.
 */
export declare class PagespeedApiPagespeedResponseV4LoadingExperience extends SpeakeasyBase {
    /**
     * The url, pattern or origin which the metrics are on.
     */
    id?: string;
    initialUrl?: string;
    metrics?: Record<string, PagespeedApiPagespeedResponseV4LoadingExperienceMetrics>;
    overallCategory?: string;
}
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
 */
export declare class PagespeedApiPagespeedResponseV4PageStats extends SpeakeasyBase {
    /**
     * Content management system (CMS) used for the page.
     */
    cms?: string;
    /**
     * Number of uncompressed response bytes for CSS resources on the page.
     */
    cssResponseBytes?: string;
    /**
     * Number of response bytes for flash resources on the page.
     */
    flashResponseBytes?: string;
    /**
     * Number of uncompressed response bytes for the main HTML document and all iframes on the page.
     */
    htmlResponseBytes?: string;
    /**
     * Number of response bytes for image resources on the page.
     */
    imageResponseBytes?: string;
    /**
     * Number of uncompressed response bytes for JS resources on the page.
     */
    javascriptResponseBytes?: string;
    /**
     * The needed round trips to load render blocking resources
     */
    numRenderBlockingRoundTrips?: number;
    /**
     * The needed round trips to load the full page
     */
    numTotalRoundTrips?: number;
    /**
     * Number of CSS resources referenced by the page.
     */
    numberCssResources?: number;
    /**
     * Number of unique hosts referenced by the page.
     */
    numberHosts?: number;
    /**
     * Number of JavaScript resources referenced by the page.
     */
    numberJsResources?: number;
    /**
     * Number of HTTP resources loaded by the page.
     */
    numberResources?: number;
    /**
     * Number of roboted resources.
     */
    numberRobotedResources?: number;
    /**
     * Number of static (i.e. cacheable) resources on the page.
     */
    numberStaticResources?: number;
    /**
     * Number of transient-failed resources.
     */
    numberTransientFetchFailureResources?: number;
    /**
     * Number of response bytes for other resources on the page.
     */
    otherResponseBytes?: string;
    /**
     * Number of over-the-wire bytes, uses the default gzip compression strategy as an estimation.
     */
    overTheWireResponseBytes?: string;
    /**
     * List of roboted urls.
     */
    robotedUrls?: string[];
    /**
     * Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
     */
    textResponseBytes?: string;
    /**
     * Total size of all request bytes sent by the page.
     */
    totalRequestBytes?: string;
    /**
     * List of transient fetch failure urls.
     */
    transientFetchFailureUrls?: string[];
}
/**
 * The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
 */
export declare class PagespeedApiPagespeedResponseV4RuleGroups extends SpeakeasyBase {
    pass?: boolean;
    /**
     * The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable, or how much more secure). A high score indicates little room for improvement, while a lower score indicates more room for improvement.
     */
    score?: number;
}
/**
 * The version of PageSpeed used to generate these results.
 */
export declare class PagespeedApiPagespeedResponseV4Version extends SpeakeasyBase {
    /**
     * The major version number of PageSpeed used to generate these results.
     */
    major?: number;
    /**
     * The minor version number of PageSpeed used to generate these results.
     */
    minor?: number;
}
/**
 * Successful response
 */
export declare class PagespeedApiPagespeedResponseV4 extends SpeakeasyBase {
    /**
     * The captcha verify result
     */
    captchaResult?: string;
    /**
     * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
     */
    formattedResults?: PagespeedApiPagespeedResponseV4FormattedResults;
    /**
     * Canonicalized and final URL for the document, after following page redirects (if any).
     */
    id?: string;
    /**
     * List of rules that were specified in the request, but which the server did not know how to instantiate.
     */
    invalidRules?: string[];
    /**
     * Kind of result.
     */
    kind?: string;
    /**
     * Metrics of end users' page loading experience.
     */
    loadingExperience?: PagespeedApiPagespeedResponseV4LoadingExperience;
    /**
     * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
     */
    pageStats?: PagespeedApiPagespeedResponseV4PageStats;
    /**
     * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
     */
    responseCode?: number;
    /**
     * A map with one entry for each rule group in these results.
     */
    ruleGroups?: Record<string, PagespeedApiPagespeedResponseV4RuleGroups>;
    screenshot?: PagespeedApiImageV4;
    /**
     * Additional base64-encoded screenshots of the page, in various partial render states.
     */
    snapshots?: PagespeedApiImageV4[];
    /**
     * Title of the page, as displayed in the browser's title bar.
     */
    title?: string;
    /**
     * The version of PageSpeed used to generate these results.
     */
    version?: PagespeedApiPagespeedResponseV4Version;
}
