import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the QUIC override policy for this TargetHttpsProxy resource. This setting determines whether the load balancer attempts to negotiate QUIC with clients. You can specify NONE, ENABLE, or DISABLE. - When quic-override is set to NONE, Google manages whether QUIC is used. - When quic-override is set to ENABLE, the load balancer uses QUIC when possible. - When quic-override is set to DISABLE, the load balancer doesn't use QUIC. - If the quic-override flag is not specified, NONE is implied.
 */
export declare enum TargetHttpsProxyQuicOverrideEnum {
    Disable = "DISABLE",
    Enable = "ENABLE",
    None = "NONE"
}
/**
 * Represents a Target HTTPS Proxy resource. Google Compute Engine has two Target HTTPS Proxy resources: * [Global](/compute/docs/reference/rest/v1/targetHttpsProxies) * [Regional](/compute/docs/reference/rest/v1/regionTargetHttpsProxies) A target HTTPS proxy is a component of GCP HTTPS load balancers. * targetHttpsProxies are used by external HTTPS load balancers. * regionTargetHttpsProxies are used by internal HTTPS load balancers. Forwarding rules reference a target HTTPS proxy, and the target proxy then references a URL map. For more information, read Using Target Proxies and Forwarding rule concepts.
 */
export declare class TargetHttpsProxy extends SpeakeasyBase {
    /**
     * Optional. A URL referring to a networksecurity.AuthorizationPolicy resource that describes how the proxy should authorize inbound traffic. If left blank, access will not be restricted by an authorization policy. Refer to the AuthorizationPolicy resource for additional details. authorizationPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED. Note: This field currently has no impact.
     */
    authorizationPolicy?: string;
    /**
     * URL of a certificate map that identifies a certificate map associated with the given target proxy. This field can only be set for global target proxies. If set, sslCertificates will be ignored.
     */
    certificateMap?: string;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a TargetHttpsProxy. An up-to-date fingerprint must be provided in order to patch the TargetHttpsProxy; otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the TargetHttpsProxy.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
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
     * Specifies the QUIC override policy for this TargetHttpsProxy resource. This setting determines whether the load balancer attempts to negotiate QUIC with clients. You can specify NONE, ENABLE, or DISABLE. - When quic-override is set to NONE, Google manages whether QUIC is used. - When quic-override is set to ENABLE, the load balancer uses QUIC when possible. - When quic-override is set to DISABLE, the load balancer doesn't use QUIC. - If the quic-override flag is not specified, NONE is implied.
     */
    quicOverride?: TargetHttpsProxyQuicOverrideEnum;
    /**
     * [Output Only] URL of the region where the regional TargetHttpsProxy resides. This field is not applicable to global TargetHttpsProxies.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * Optional. A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.
     */
    serverTlsPolicy?: string;
    /**
     * URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
     */
    sslCertificates?: string[];
    /**
     * URL of SslPolicy resource that will be associated with the TargetHttpsProxy resource. If not set, the TargetHttpsProxy resource has no SSL policy configured.
     */
    sslPolicy?: string;
    /**
     * A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are all valid URLs for specifying a URL map: - https://www.googleapis.compute/v1/projects/project/global/urlMaps/ url-map - projects/project/global/urlMaps/url-map - global/urlMaps/url-map
     */
    urlMap?: string;
}
