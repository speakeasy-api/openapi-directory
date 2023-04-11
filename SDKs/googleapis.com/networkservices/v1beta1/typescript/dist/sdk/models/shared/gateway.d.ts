import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.
 */
export declare enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OpenMesh = "OPEN_MESH",
    SecureWebGateway = "SECURE_WEB_GATEWAY"
}
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
 */
export declare class Gateway extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the Gateway resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the Gateway resource. It matches pattern `projects/* /locations/* /gateways/`.
     */
    name?: string;
    /**
     * Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
     */
    ports?: number[];
    /**
     * Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    scope?: string;
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string;
    /**
     * Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.
     */
    serverTlsPolicy?: string;
    /**
     * Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.
     */
    type?: GatewayTypeEnum;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
 */
export declare class GatewayInput extends SpeakeasyBase {
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the Gateway resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the Gateway resource. It matches pattern `projects/* /locations/* /gateways/`.
     */
    name?: string;
    /**
     * Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
     */
    ports?: number[];
    /**
     * Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    scope?: string;
    /**
     * Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.
     */
    serverTlsPolicy?: string;
    /**
     * Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.
     */
    type?: GatewayTypeEnum;
}
