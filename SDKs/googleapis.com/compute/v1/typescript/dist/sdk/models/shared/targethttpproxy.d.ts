import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Target HTTP Proxy resource. Google Compute Engine has two Target HTTP Proxy resources: * [Global](/compute/docs/reference/rest/v1/targetHttpProxies) * [Regional](/compute/docs/reference/rest/v1/regionTargetHttpProxies) A target HTTP proxy is a component of GCP HTTP load balancers. * targetHttpProxies are used by external HTTP load balancers and Traffic Director. * regionTargetHttpProxies are used by internal HTTP load balancers. Forwarding rules reference a target HTTP proxy, and the target proxy then references a URL map. For more information, read Using Target Proxies and Forwarding rule concepts.
 */
export declare class TargetHttpProxy extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a TargetHttpProxy. An up-to-date fingerprint must be provided in order to patch/update the TargetHttpProxy; otherwise, the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve the TargetHttpProxy.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
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
     * [Output Only] URL of the region where the regional Target HTTP Proxy resides. This field is not applicable to global Target HTTP Proxies.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * URL to the UrlMap resource that defines the mapping from URL to the BackendService.
     */
    urlMap?: string;
}
