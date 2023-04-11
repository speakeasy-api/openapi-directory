import { SpeakeasyBase } from "../../../internal/utils";
import { PathOverride } from "./pathoverride";
import { QueryOverride } from "./queryoverride";
/**
 * Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).
 */
export declare enum UriOverrideSchemeEnum {
    SchemeUnspecified = "SCHEME_UNSPECIFIED",
    Http = "HTTP",
    Https = "HTTPS"
}
/**
 * URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.
 */
export declare enum UriOverrideUriOverrideEnforceModeEnum {
    UriOverrideEnforceModeUnspecified = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED",
    IfNotExists = "IF_NOT_EXISTS",
    Always = "ALWAYS"
}
/**
 * Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
 */
export declare class UriOverride extends SpeakeasyBase {
    /**
     * Host override. When specified, replaces the host part of the task URL. For example, if the task URL is "https://www.google.com," and host value is set to "example.net", the overridden URI will be changed to "https://example.net." Host value cannot be an empty string (INVALID_ARGUMENT).
     */
    host?: string;
    /**
     * PathOverride. Path message defines path override for HTTP targets.
     */
    pathOverride?: PathOverride;
    /**
     * Port override. When specified, replaces the port part of the task URI. For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo. Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port.
     */
    port?: string;
    /**
     * QueryOverride. Query message defines query override for HTTP targets.
     */
    queryOverride?: QueryOverride;
    /**
     * Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).
     */
    scheme?: UriOverrideSchemeEnum;
    /**
     * URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.
     */
    uriOverrideEnforceMode?: UriOverrideUriOverrideEnforceModeEnum;
}
