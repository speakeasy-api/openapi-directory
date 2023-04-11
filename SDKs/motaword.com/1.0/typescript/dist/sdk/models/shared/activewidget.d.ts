import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Updated widget details
 */
export declare class ActiveWidget extends SpeakeasyBase {
    /**
     * When true, hash params are included in filenames. When false, params are ignored.
     */
    allowHashInUrl?: boolean;
    /**
     * When true, query params are included in filenames. When false, params are ignored.
     */
    allowQueryInUrl?: boolean;
    /**
     * When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.
     */
    autoDetectSourceLanguage?: boolean;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    createdAt?: Date;
    /**
     * Continuous project exclusive elements and rules
     */
    elements?: string;
    /**
     * Specify whether we should follow the user around in your website and automatically translate pages.
     */
    followUser?: boolean;
    /**
     * Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.
     */
    forceCacheRefreshInterval?: boolean;
    id?: number;
    /**
     * Continuous project language mappings
     */
    languageMappings?: string;
    /**
     * Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.
     */
    live?: boolean;
    /**
     * We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.
     */
    modifyLinks?: boolean;
    name?: string;
    /**
     * When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.
     */
    optimizePerPage?: boolean;
    /**
     * Continuous project page rules
     */
    pages?: string;
    /**
     * Custom regex for path-type URL mode.
     */
    pathRegex?: string;
    /**
     * Options are "bottom-left", "bottom-right", "in-place"
     */
    position?: string;
    /**
     * Query parameter name to be used with query-type URL mode. Default is 'locale'.
     */
    queryName?: string;
    /**
     * When true, Active ecosystem reboots itself when url changes.
     */
    rebootOnUrlChange?: boolean;
    /**
     * JSON string for a list of domains that this widget's API interactions are limited to.
     */
    restrictedDomains?: string;
    /**
     * Continuous project section rules
     */
    sections?: string;
    /**
     * Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.
     */
    testMode?: boolean;
    /**
     * \"light\", \"dark\" OR custom JSON.
     */
    theme?: string;
    /**
     * Token that you should use when you are using this widget on your website.
     */
    token?: string;
    /**
     * When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.
     */
    urlChangeMode?: string;
    /**
     * When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.
     */
    urlMode?: string;
    /**
     * Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.
     */
    useCache?: boolean;
    /**
     * When enabled, we will translate your website with dummy content, rather than actually using MT/TM.
     */
    useDummyTranslations?: boolean;
    /**
     * Continuous project variable definitions
     */
    variables?: string;
}
