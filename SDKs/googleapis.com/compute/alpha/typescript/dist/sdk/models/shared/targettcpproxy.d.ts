import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
export declare enum TargetTcpProxyProxyHeaderEnum {
    None = "NONE",
    ProxyV1 = "PROXY_V1"
}
/**
 * Represents a Target TCP Proxy resource. A target TCP proxy is a component of a TCP Proxy load balancer. Global forwarding rules reference target TCP proxy, and the target proxy then references an external backend service. For more information, read TCP Proxy Load Balancing overview.
 */
export declare class TargetTcpProxy extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#targetTcpProxy for target TCP proxies.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. When this field is set to true, Envoy proxies set up inbound traffic interception and bind to the IP address and port specified in the forwarding rule. This is generally useful when using Traffic Director to configure Envoy as a gateway or middle proxy (in other words, not a sidecar proxy). The Envoy proxy listens for inbound requests and handles requests when it receives them. The default is false.
     */
    proxyBind?: boolean;
    /**
     * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
     */
    proxyHeader?: TargetTcpProxyProxyHeaderEnum;
    /**
     * [Output Only] URL of the region where the regional TCP proxy resides. This field is not applicable to global TCP proxy.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * URL to the BackendService resource.
     */
    service?: string;
}
