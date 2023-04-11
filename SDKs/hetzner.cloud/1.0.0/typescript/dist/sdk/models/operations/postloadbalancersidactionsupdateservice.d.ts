import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Additional configuration for protocol http
 */
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    /**
     * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
     */
    domain: string;
    /**
     * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
     */
    path: string;
    /**
     * String that must be contained in HTTP response in order to pass the health check
     */
    response?: string;
    /**
     * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.
     */
    statusCodes?: string[];
    /**
     * Use HTTPS for health check
     */
    tls?: boolean;
}
/**
 * Type of the health check
 */
export declare enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    /**
     * Time interval in seconds health checks are performed
     */
    interval: number;
    /**
     * Port the health check will be performed on
     */
    port: number;
    /**
     * Type of the health check
     */
    protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    /**
     * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
     */
    retries: number;
    /**
     * Time in seconds after an attempt is considered a timeout
     */
    timeout: number;
}
/**
 * Configuration option for protocols http and https
 */
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
    /**
     * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"
     */
    certificates?: number[];
    /**
     * Lifetime of the cookie used for sticky sessions
     */
    cookieLifetime?: number;
    /**
     * Name of the cookie used for sticky sessions
     */
    cookieName?: string;
    /**
     * Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`
     */
    redirectHttp?: boolean;
    /**
     * Use sticky sessions. Only available if protocol is "http" or "https". Default `false`
     */
    stickySessions?: boolean;
}
/**
 * Protocol of the Load Balancer
 */
export declare enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare class PostLoadBalancersIdActionsUpdateServiceRequest extends SpeakeasyBase {
    requestBody?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum;
}
/**
 * The `action` key contains the `update_service` Action
 */
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsUpdateServiceResponse extends SpeakeasyBase {
    /**
     * The `action` key contains the `update_service` Action
     */
    actionResponse?: PostLoadBalancersIdActionsUpdateServiceActionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
