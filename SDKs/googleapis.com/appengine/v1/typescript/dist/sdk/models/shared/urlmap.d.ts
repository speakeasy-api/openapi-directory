import { SpeakeasyBase } from "../../../internal/utils";
import { ApiEndpointHandler } from "./apiendpointhandler";
import { ScriptHandler } from "./scripthandler";
import { StaticFilesHandler } from "./staticfileshandler";
/**
 * Action to take when users access resources that require authentication. Defaults to redirect.
 */
export declare enum UrlMapAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED",
    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT",
    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}
/**
 * Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment.
 */
export declare enum UrlMapLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED",
    LoginOptional = "LOGIN_OPTIONAL",
    LoginAdmin = "LOGIN_ADMIN",
    LoginRequired = "LOGIN_REQUIRED"
}
/**
 * 30x code to use when performing redirects for the secure field. Defaults to 302.
 */
export declare enum UrlMapRedirectHttpResponseCodeEnum {
    RedirectHttpResponseCodeUnspecified = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
    RedirectHttpResponseCode301 = "REDIRECT_HTTP_RESPONSE_CODE_301",
    RedirectHttpResponseCode302 = "REDIRECT_HTTP_RESPONSE_CODE_302",
    RedirectHttpResponseCode303 = "REDIRECT_HTTP_RESPONSE_CODE_303",
    RedirectHttpResponseCode307 = "REDIRECT_HTTP_RESPONSE_CODE_307"
}
/**
 * Security (HTTPS) enforcement for this URL.
 */
export declare enum UrlMapSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED",
    SecureDefault = "SECURE_DEFAULT",
    SecureNever = "SECURE_NEVER",
    SecureOptional = "SECURE_OPTIONAL",
    SecureAlways = "SECURE_ALWAYS"
}
/**
 * URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
 */
export declare class UrlMap extends SpeakeasyBase {
    /**
     * Uses Google Cloud Endpoints to handle requests.
     */
    apiEndpoint?: ApiEndpointHandler;
    /**
     * Action to take when users access resources that require authentication. Defaults to redirect.
     */
    authFailAction?: UrlMapAuthFailActionEnum;
    /**
     * Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment.
     */
    login?: UrlMapLoginEnum;
    /**
     * 30x code to use when performing redirects for the secure field. Defaults to 302.
     */
    redirectHttpResponseCode?: UrlMapRedirectHttpResponseCodeEnum;
    /**
     * Executes a script to handle the request that matches the URL pattern.
     */
    script?: ScriptHandler;
    /**
     * Security (HTTPS) enforcement for this URL.
     */
    securityLevel?: UrlMapSecurityLevelEnum;
    /**
     * Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.
     */
    staticFiles?: StaticFilesHandler;
    /**
     * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
     */
    urlRegex?: string;
}
