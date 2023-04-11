import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP Status code to use for the redirect.
 */
export declare enum HttpRouteRedirectResponseCodeEnum {
    ResponseCodeUnspecified = "RESPONSE_CODE_UNSPECIFIED",
    MovedPermanentlyDefault = "MOVED_PERMANENTLY_DEFAULT",
    Found = "FOUND",
    SeeOther = "SEE_OTHER",
    TemporaryRedirect = "TEMPORARY_REDIRECT",
    PermanentRedirect = "PERMANENT_REDIRECT"
}
/**
 * The specification for redirecting traffic.
 */
export declare class HttpRouteRedirect extends SpeakeasyBase {
    /**
     * The host that will be used in the redirect response instead of the one that was supplied in the request.
     */
    hostRedirect?: string;
    /**
     * If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false.
     */
    httpsRedirect?: boolean;
    /**
     * The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
     */
    pathRedirect?: string;
    /**
     * The port that will be used in the redirected request instead of the one that was supplied in the request.
     */
    portRedirect?: number;
    /**
     * Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request.
     */
    prefixRewrite?: string;
    /**
     * The HTTP Status code to use for the redirect.
     */
    responseCode?: HttpRouteRedirectResponseCodeEnum;
    /**
     * if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false.
     */
    stripQuery?: boolean;
}
