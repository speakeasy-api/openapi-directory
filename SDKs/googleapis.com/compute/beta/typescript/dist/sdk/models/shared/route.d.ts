import { SpeakeasyBase } from "../../../internal/utils";
import { RouteAsPath } from "./routeaspath";
/**
 * [Output only] The status of the route.
 */
export declare enum RouteRouteStatusEnum {
    Active = "ACTIVE",
    Dropped = "DROPPED",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
/**
 * [Output Only] The type of this route, which can be one of the following values: - 'TRANSIT' for a transit route that this router learned from another Cloud Router and will readvertise to one of its BGP peers - 'SUBNET' for a route from a subnet of the VPC - 'BGP' for a route learned from a BGP peer of this router - 'STATIC' for a static route
 */
export declare enum RouteRouteTypeEnum {
    Bgp = "BGP",
    Static = "STATIC",
    Subnet = "SUBNET",
    Transit = "TRANSIT"
}
/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
export declare enum RouteWarningsCodeEnum {
    CleanupFailed = "CLEANUP_FAILED",
    DeprecatedResourceUsed = "DEPRECATED_RESOURCE_USED",
    DeprecatedTypeUsed = "DEPRECATED_TYPE_USED",
    DiskSizeLargerThanImageSize = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE",
    ExperimentalTypeUsed = "EXPERIMENTAL_TYPE_USED",
    ExternalApiWarning = "EXTERNAL_API_WARNING",
    FieldValueOverriden = "FIELD_VALUE_OVERRIDEN",
    InjectedKernelsDeprecated = "INJECTED_KERNELS_DEPRECATED",
    InvalidHealthCheckForDynamicWieghtedLb = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB",
    LargeDeploymentWarning = "LARGE_DEPLOYMENT_WARNING",
    MissingTypeDependency = "MISSING_TYPE_DEPENDENCY",
    NextHopAddressNotAssigned = "NEXT_HOP_ADDRESS_NOT_ASSIGNED",
    NextHopCannotIpForward = "NEXT_HOP_CANNOT_IP_FORWARD",
    NextHopInstanceHasNoIpv6Interface = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE",
    NextHopInstanceNotFound = "NEXT_HOP_INSTANCE_NOT_FOUND",
    NextHopInstanceNotOnNetwork = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK",
    NextHopNotRunning = "NEXT_HOP_NOT_RUNNING",
    NotCriticalError = "NOT_CRITICAL_ERROR",
    NoResultsOnPage = "NO_RESULTS_ON_PAGE",
    PartialSuccess = "PARTIAL_SUCCESS",
    RequiredTosAgreement = "REQUIRED_TOS_AGREEMENT",
    ResourceInUseByOtherResourceWarning = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING",
    ResourceNotDeleted = "RESOURCE_NOT_DELETED",
    SchemaValidationIgnored = "SCHEMA_VALIDATION_IGNORED",
    SingleInstancePropertyTemplate = "SINGLE_INSTANCE_PROPERTY_TEMPLATE",
    UndeclaredProperties = "UNDECLARED_PROPERTIES",
    Unreachable = "UNREACHABLE"
}
export declare class RouteWarningsData extends SpeakeasyBase {
    /**
     * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
     */
    key?: string;
    /**
     * [Output Only] A warning data value corresponding to the key.
     */
    value?: string;
}
export declare class RouteWarnings extends SpeakeasyBase {
    /**
     * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
     */
    code?: RouteWarningsCodeEnum;
    /**
     * [Output Only] Metadata about this warning in key: value format. For example: "data": [ { "key": "scope", "value": "zones/us-east1-d" }
     */
    data?: RouteWarningsData[];
    /**
     * [Output Only] A human-readable description of the warning code.
     */
    message?: string;
}
/**
 * Represents a Route resource. A route defines a path from VM instances in the VPC network to a specific destination. This destination can be inside or outside the VPC network. For more information, read the Routes overview.
 */
export declare class Route extends SpeakeasyBase {
    /**
     * [Output Only] AS path.
     */
    asPaths?: RouteAsPath[];
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this field when you create the resource.
     */
    description?: string;
    /**
     * The destination range of outgoing packets that this route applies to. Both IPv4 and IPv6 are supported.
     */
    destRange?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of this resource. Always compute#routes for Route resources.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit.
     */
    name?: string;
    /**
     * Fully-qualified URL of the network that this route applies to.
     */
    network?: string;
    /**
     * The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL: projects/ project/global/gateways/default-internet-gateway
     */
    nextHopGateway?: string;
    /**
     * The URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets or the IP address of the forwarding Rule. For example, the following are all valid URLs: - 10.128.0.56 - https://www.googleapis.com/compute/v1/projects/project/regions/region /forwardingRules/forwardingRule - regions/region/forwardingRules/forwardingRule
     */
    nextHopIlb?: string;
    /**
     * The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
     */
    nextHopInstance?: string;
    /**
     * [Output Only] The URL to an InterconnectAttachment which is the next hop for the route. This field will only be populated for the dynamic routes generated by Cloud Router with a linked interconnectAttachment.
     */
    nextHopInterconnectAttachment?: string;
    /**
     * The network IP address of an instance that should handle matching packets. Only IPv4 is supported.
     */
    nextHopIp?: string;
    /**
     * The URL of the local network if it should handle matching packets.
     */
    nextHopNetwork?: string;
    /**
     * [Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.
     */
    nextHopPeering?: string;
    /**
     * The URL to a VpnTunnel that should handle matching packets.
     */
    nextHopVpnTunnel?: string;
    /**
     * The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In cases where multiple routes have equal prefix length, the one with the lowest-numbered priority value wins. The default value is `1000`. The priority value must be from `0` to `65535`, inclusive.
     */
    priority?: number;
    /**
     * [Output only] The status of the route.
     */
    routeStatus?: RouteRouteStatusEnum;
    /**
     * [Output Only] The type of this route, which can be one of the following values: - 'TRANSIT' for a transit route that this router learned from another Cloud Router and will readvertise to one of its BGP peers - 'SUBNET' for a route from a subnet of the VPC - 'BGP' for a route learned from a BGP peer of this router - 'STATIC' for a static route
     */
    routeType?: RouteRouteTypeEnum;
    /**
     * [Output Only] Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * A list of instance tags to which this route applies.
     */
    tags?: string[];
    /**
     * [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
     */
    warnings?: RouteWarnings[];
}
