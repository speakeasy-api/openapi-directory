import { SpeakeasyBase } from "../../../internal/utils";
import { GRPCHealthCheck } from "./grpchealthcheck";
import { HealthCheckLogConfig } from "./healthchecklogconfig";
import { Http2HealthCheck } from "./http2healthcheck";
import { HTTPHealthCheck } from "./httphealthcheck";
import { HTTPSHealthCheck } from "./httpshealthcheck";
import { SSLHealthCheck } from "./sslhealthcheck";
import { TCPHealthCheck } from "./tcphealthcheck";
import { UDPHealthCheck } from "./udphealthcheck";
/**
 * Specifies the type of the healthCheck, either TCP, SSL, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check fields must be specified, which must match type field.
 */
export declare enum HealthCheckTypeEnum {
    Grpc = "GRPC",
    Http = "HTTP",
    Http2 = "HTTP2",
    Https = "HTTPS",
    Invalid = "INVALID",
    Ssl = "SSL",
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * Represents a Health Check resource. Google Compute Engine has two Health Check resources: * [Global](/compute/docs/reference/rest/alpha/healthChecks) * [Regional](/compute/docs/reference/rest/alpha/regionHealthChecks) Internal HTTP(S) load balancers must use regional health checks (`compute.v1.regionHealthChecks`). Traffic Director must use global health checks (`compute.v1.HealthChecks`). Internal TCP/UDP load balancers can use either regional or global health checks (`compute.v1.regionHealthChecks` or `compute.v1.HealthChecks`). External HTTP(S), TCP proxy, and SSL proxy load balancers as well as managed instance group auto-healing must use global health checks (`compute.v1.HealthChecks`). Backend service-based network load balancers must use regional health checks (`compute.v1.regionHealthChecks`). Target pool-based network load balancers must use legacy HTTP health checks (`compute.v1.httpHealthChecks`). For more information, see Health checks overview.
 */
export declare class HealthCheck extends SpeakeasyBase {
    /**
     * How often (in seconds) to send a health check. The default value is 5 seconds.
     */
    checkIntervalSec?: number;
    /**
     * [Output Only] Creation timestamp in 3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    grpcHealthCheck?: GRPCHealthCheck;
    /**
     * A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
     */
    healthyThreshold?: number;
    http2HealthCheck?: Http2HealthCheck;
    httpHealthCheck?: HTTPHealthCheck;
    httpsHealthCheck?: HTTPSHealthCheck;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * Type of the resource.
     */
    kind?: string;
    /**
     * Configuration of logging on a health check. If logging is enabled, logs will be exported to Stackdriver.
     */
    logConfig?: HealthCheckLogConfig;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. For example, a name that is 1-63 characters long, matches the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`, and otherwise complies with RFC1035. This regular expression describes a name where the first character is a lowercase letter, and all following characters are a dash, lowercase letter, or digit, except the last character, which isn't a dash.
     */
    name?: string;
    /**
     * [Output Only] Region where the health check resides. Not applicable to global health checks.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * The list of cloud regions from which health checks are performed. If any regions are specified, then exactly 3 regions should be specified. The region names must be valid names of GCP regions. This can only be set for global health check. If this list is non-empty, then there are restrictions on what other health check fields are supported and what other resources can use this health check: - SSL, HTTP2, and GRPC protocols are not supported. - The TCP request field is not supported. - The proxyHeader field for HTTP, HTTPS, and TCP is not supported. - The checkIntervalSec field must be at least 30. - The health check cannot be used with BackendService nor with managed instance group auto-healing.
     */
    sourceRegions?: string[];
    sslHealthCheck?: SSLHealthCheck;
    tcpHealthCheck?: TCPHealthCheck;
    /**
     * How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than checkIntervalSec.
     */
    timeoutSec?: number;
    /**
     * Specifies the type of the healthCheck, either TCP, SSL, HTTP, HTTPS, HTTP2 or GRPC. Exactly one of the protocol-specific health check fields must be specified, which must match type field.
     */
    type?: HealthCheckTypeEnum;
    udpHealthCheck?: UDPHealthCheck;
    /**
     * A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
     */
    unhealthyThreshold?: number;
}
