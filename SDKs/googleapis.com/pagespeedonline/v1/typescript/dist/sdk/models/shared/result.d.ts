import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs extends SpeakeasyBase {
    /**
     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
     */
    type?: string;
    /**
     * Argument value, as a localized string.
     */
    value?: string;
}
/**
 * Heading to be displayed with the list of URLs.
 */
export declare class ResultFormattedResultsRuleResultsUrlBlocksHeader extends SpeakeasyBase {
    /**
     * List of arguments for the format string.
     */
    args?: ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs[];
    /**
     * A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the following $1 resources would save a total of $2 bytes'.
     */
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs extends SpeakeasyBase {
    /**
     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
     */
    type?: string;
    /**
     * Argument value, as a localized string.
     */
    value?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails extends SpeakeasyBase {
    /**
     * List of arguments for the format string.
     */
    args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs[];
    /**
     * A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Unnecessary metadata for this resource adds an additional $1 bytes to its download size'.
     */
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs extends SpeakeasyBase {
    /**
     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
     */
    type?: string;
    /**
     * Argument value, as a localized string.
     */
    value?: string;
}
/**
 * A format string that gives information about the URL, and a list of arguments for that format string.
 */
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsResult extends SpeakeasyBase {
    /**
     * List of arguments for the format string.
     */
    args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs[];
    /**
     * A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. 'Minifying the resource at URL $1 can save $2 bytes'.
     */
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
    /**
     * List of entries that provide additional details about a single URL. Optional.
     */
    details?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails[];
    /**
     * A format string that gives information about the URL, and a list of arguments for that format string.
     */
    result?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResult;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
    /**
     * Heading to be displayed with the list of URLs.
     */
    header?: ResultFormattedResultsRuleResultsUrlBlocksHeader;
    /**
     * List of entries that provide information about URLs in the url block. Optional.
     */
    urls?: ResultFormattedResultsRuleResultsUrlBlocksUrls[];
}
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
 */
export declare class ResultFormattedResultsRuleResults extends SpeakeasyBase {
    /**
     * Localized name of the rule, intended for presentation to a user.
     */
    localizedRuleName?: string;
    /**
     * The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule's suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal.
     */
    ruleImpact?: number;
    /**
     * List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details.
     */
    urlBlocks?: ResultFormattedResultsRuleResultsUrlBlocks[];
}
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
 */
export declare class ResultFormattedResults extends SpeakeasyBase {
    /**
     * The locale of the formattedResults, e.g. "en_US".
     */
    locale?: string;
    /**
     * Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
     */
    ruleResults?: Record<string, ResultFormattedResultsRuleResults>;
}
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
 */
export declare class ResultPageStats extends SpeakeasyBase {
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
     * Number of static (i.e. cacheable) resources on the page.
     */
    numberStaticResources?: number;
    /**
     * Number of response bytes for other resources on the page.
     */
    otherResponseBytes?: string;
    /**
     * Number of uncompressed response bytes for text resources not covered by other statistics (i.e non-HTML, non-script, non-CSS resources) on the page.
     */
    textResponseBytes?: string;
    /**
     * Total size of all request bytes sent by the page.
     */
    totalRequestBytes?: string;
}
/**
 * Base64-encoded screenshot of the page that was analyzed.
 */
export declare class ResultScreenshot extends SpeakeasyBase {
    /**
     * Image data base64 encoded.
     */
    data?: string;
    /**
     * Height of screenshot in pixels.
     */
    height?: number;
    /**
     * Mime type of image data. E.g. "image/jpeg".
     */
    mimeType?: string;
    /**
     * Width of screenshot in pixels.
     */
    width?: number;
}
/**
 * The version of PageSpeed used to generate these results.
 */
export declare class ResultVersion extends SpeakeasyBase {
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
export declare class Result extends SpeakeasyBase {
    /**
     * The captcha verify result
     */
    captchaResult?: string;
    /**
     * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
     */
    formattedResults?: ResultFormattedResults;
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
     * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
     */
    pageStats?: ResultPageStats;
    /**
     * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
     */
    responseCode?: number;
    /**
     * The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
     */
    score?: number;
    /**
     * Base64-encoded screenshot of the page that was analyzed.
     */
    screenshot?: ResultScreenshot;
    /**
     * Title of the page, as displayed in the browser's title bar.
     */
    title?: string;
    /**
     * The version of PageSpeed used to generate these results.
     */
    version?: ResultVersion;
}
