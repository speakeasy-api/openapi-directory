import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Session affinity option, must be one of the following values: NONE: Connections from the same client IP may go to any instance in the pool. CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy. CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains healthy.
 */
export declare enum TargetPoolSessionAffinityEnum {
    ClientIp = "CLIENT_IP",
    ClientIpNoDestination = "CLIENT_IP_NO_DESTINATION",
    ClientIpPortProto = "CLIENT_IP_PORT_PROTO",
    ClientIpProto = "CLIENT_IP_PROTO",
    GeneratedCookie = "GENERATED_COOKIE",
    HeaderField = "HEADER_FIELD",
    HttpCookie = "HTTP_COOKIE",
    None = "NONE"
}
/**
 * Represents a Target Pool resource. Target pools are used for network TCP/UDP load balancing. A target pool references member instances, an associated legacy HttpHealthCheck resource, and, optionally, a backup target pool. For more information, read Using target pools.
 */
export declare class TargetPool extends SpeakeasyBase {
    /**
     * The server-defined URL for the resource. This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly set to a value between [0, 1]. backupPool and failoverRatio together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below failoverRatio, traffic arriving at the load-balanced IP will be directed to the backup pool. In case where failoverRatio and backupPool are not set, or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
     */
    backupPool?: string;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some other target pool). The value of the field must be in [0, 1]. If set, backupPool must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool. In case where failoverRatio is not set or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
     */
    failoverRatio?: number;
    /**
     * The URL of the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if the health checks pass. Only legacy HttpHealthChecks are supported. Only one health check may be specified.
     */
    healthChecks?: string[];
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
     */
    instances?: string[];
    /**
     * [Output Only] Type of the resource. Always compute#targetPool for target pools.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] URL of the region where the target pool resides.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * Session affinity option, must be one of the following values: NONE: Connections from the same client IP may go to any instance in the pool. CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy. CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains healthy.
     */
    sessionAffinity?: TargetPoolSessionAffinityEnum;
}
