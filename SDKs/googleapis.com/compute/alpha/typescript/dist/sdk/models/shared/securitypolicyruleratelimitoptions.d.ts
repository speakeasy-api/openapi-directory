import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig } from "./securitypolicyruleratelimitoptionsenforceonkeyconfig";
import { SecurityPolicyRuleRateLimitOptionsRpcStatus } from "./securitypolicyruleratelimitoptionsrpcstatus";
import { SecurityPolicyRuleRateLimitOptionsThreshold } from "./securitypolicyruleratelimitoptionsthreshold";
import { SecurityPolicyRuleRedirectOptions } from "./securitypolicyruleredirectoptions";
/**
 * Determines the key to enforce the rate_limit_threshold on. Possible values are: - ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured. - IP: The source IP address of the request is the key. Each IP has this limit enforced separately. - HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL. - XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP. - HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL. - HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes. - SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session. - REGION_CODE: The country/region from which the request originates.
 */
export declare enum SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum {
    All = "ALL",
    AllIps = "ALL_IPS",
    HttpCookie = "HTTP_COOKIE",
    HttpHeader = "HTTP_HEADER",
    HttpPath = "HTTP_PATH",
    Ip = "IP",
    RegionCode = "REGION_CODE",
    Sni = "SNI",
    XffIp = "XFF_IP"
}
export declare class SecurityPolicyRuleRateLimitOptions extends SpeakeasyBase {
    /**
     * Can only be specified if the action for the rule is "rate_based_ban". If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
     */
    banDurationSec?: number;
    banThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
    /**
     * Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.
     */
    conformAction?: string;
    /**
     * Determines the key to enforce the rate_limit_threshold on. Possible values are: - ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured. - IP: The source IP address of the request is the key. Each IP has this limit enforced separately. - HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL. - XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP. - HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL. - HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes. - SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session. - REGION_CODE: The country/region from which the request originates.
     */
    enforceOnKey?: SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
    /**
     * If specified, any combination of values of enforce_on_key_type/enforce_on_key_name is treated as the key on which ratelimit threshold/action is enforced. You can specify up to 3 enforce_on_key_configs. If enforce_on_key_configs is specified, enforce_on_key must not be specified.
     */
    enforceOnKeyConfigs?: SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[];
    /**
     * Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
     */
    enforceOnKeyName?: string;
    /**
     * Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. Valid options are `deny(STATUS)`, where valid values for `STATUS` are 403, 404, 429, and 502, and `redirect`, where the redirect parameters come from `exceedRedirectOptions` below.
     */
    exceedAction?: string;
    /**
     * Simplified google.rpc.Status type (omitting details).
     */
    exceedActionRpcStatus?: SecurityPolicyRuleRateLimitOptionsRpcStatus;
    exceedRedirectOptions?: SecurityPolicyRuleRedirectOptions;
    rateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
}
