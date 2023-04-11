import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action to take when users access resources that require authentication. Defaults to redirect.
 */
export declare enum ApiConfigHandlerAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED",
    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT",
    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}
/**
 * Level of login required to access this resource. Defaults to optional.
 */
export declare enum ApiConfigHandlerLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED",
    LoginOptional = "LOGIN_OPTIONAL",
    LoginAdmin = "LOGIN_ADMIN",
    LoginRequired = "LOGIN_REQUIRED"
}
/**
 * Security (HTTPS) enforcement for this URL.
 */
export declare enum ApiConfigHandlerSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED",
    SecureDefault = "SECURE_DEFAULT",
    SecureNever = "SECURE_NEVER",
    SecureOptional = "SECURE_OPTIONAL",
    SecureAlways = "SECURE_ALWAYS"
}
/**
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
 */
export declare class ApiConfigHandler extends SpeakeasyBase {
    /**
     * Action to take when users access resources that require authentication. Defaults to redirect.
     */
    authFailAction?: ApiConfigHandlerAuthFailActionEnum;
    /**
     * Level of login required to access this resource. Defaults to optional.
     */
    login?: ApiConfigHandlerLoginEnum;
    /**
     * Path to the script from the application root directory.
     */
    script?: string;
    /**
     * Security (HTTPS) enforcement for this URL.
     */
    securityLevel?: ApiConfigHandlerSecurityLevelEnum;
    /**
     * URL to serve the endpoint at.
     */
    url?: string;
}
