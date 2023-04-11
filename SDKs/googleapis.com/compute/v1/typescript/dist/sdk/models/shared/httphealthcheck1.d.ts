import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a legacy HTTP Health Check resource. Legacy HTTP health checks are now only required by target pool-based network load balancers. For all other load balancers, including backend service-based network load balancers, and for managed instance group auto-healing, you must use modern (non-legacy) health checks. For more information, see Health checks overview .
 */
export declare class HttpHealthCheck1 extends SpeakeasyBase {
    /**
     * How often (in seconds) to send a health check. The default value is 5 seconds.
     */
    checkIntervalSec?: number;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
     */
    healthyThreshold?: number;
    /**
     * The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is performed will be used.
     */
    host?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The TCP port number for the HTTP health check request. The default value is 80.
     */
    port?: number;
    /**
     * The request path of the HTTP health check request. The default value is /. This field does not support query parameters. Must comply with RFC3986.
     */
    requestPath?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
     */
    timeoutSec?: number;
    /**
     * A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
     */
    unhealthyThreshold?: number;
}
