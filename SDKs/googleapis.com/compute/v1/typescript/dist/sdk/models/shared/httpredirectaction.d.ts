import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP Status code to use for this RedirectAction. Supported values are: - MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301. - FOUND, which corresponds to 302. - SEE_OTHER which corresponds to 303. - TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method is retained. - PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method is retained.
 */
export declare enum HttpRedirectActionRedirectResponseCodeEnum {
    Found = "FOUND",
    MovedPermanentlyDefault = "MOVED_PERMANENTLY_DEFAULT",
    PermanentRedirect = "PERMANENT_REDIRECT",
    SeeOther = "SEE_OTHER",
    TemporaryRedirect = "TEMPORARY_REDIRECT"
}
/**
 * Specifies settings for an HTTP redirect.
 */
export declare class HttpRedirectAction extends SpeakeasyBase {
    /**
     * The host that is used in the redirect response instead of the one that was supplied in the request. The value must be from 1 to 255 characters.
     */
    hostRedirect?: string;
    /**
     * If set to true, the URL scheme in the redirected request is set to HTTPS. If set to false, the URL scheme of the redirected request remains the same as that of the request. This must only be set for URL maps used in TargetHttpProxys. Setting this true for TargetHttpsProxy is not permitted. The default is set to false.
     */
    httpsRedirect?: boolean;
    /**
     * The path that is used in the redirect response instead of the one that was supplied in the request. pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request is used for the redirect. The value must be from 1 to 1024 characters.
     */
    pathRedirect?: string;
    /**
     * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch, retaining the remaining portion of the URL before redirecting the request. prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request is used for the redirect. The value must be from 1 to 1024 characters.
     */
    prefixRedirect?: string;
    /**
     * The HTTP Status code to use for this RedirectAction. Supported values are: - MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301. - FOUND, which corresponds to 302. - SEE_OTHER which corresponds to 303. - TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method is retained. - PERMANENT_REDIRECT, which corresponds to 308. In this case, the request method is retained.
     */
    redirectResponseCode?: HttpRedirectActionRedirectResponseCodeEnum;
    /**
     * If set to true, any accompanying query portion of the original URL is removed before redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false.
     */
    stripQuery?: boolean;
}
