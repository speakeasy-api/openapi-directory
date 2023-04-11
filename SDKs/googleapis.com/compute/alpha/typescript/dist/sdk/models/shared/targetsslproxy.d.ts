import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
export declare enum TargetSslProxyProxyHeaderEnum {
    None = "NONE",
    ProxyV1 = "PROXY_V1"
}
/**
 * Represents a Target SSL Proxy resource. A target SSL proxy is a component of a SSL Proxy load balancer. Global forwarding rules reference a target SSL proxy, and the target proxy then references an external backend service. For more information, read Using Target Proxies.
 */
export declare class TargetSslProxy extends SpeakeasyBase {
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
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
     */
    proxyHeader?: TargetSslProxyProxyHeaderEnum;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * URL to the BackendService resource.
     */
    service?: string;
    /**
     * URLs to SslCertificate resources that are used to authenticate connections to Backends. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
     */
    sslCertificates?: string[];
    /**
     * URL of SslPolicy resource that will be associated with the TargetSslProxy resource. If not set, the TargetSslProxy resource will not have any SSL policy configured.
     */
    sslPolicy?: string;
}
