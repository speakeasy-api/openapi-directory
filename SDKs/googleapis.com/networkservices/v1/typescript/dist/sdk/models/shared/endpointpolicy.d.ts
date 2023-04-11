import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMatcher } from "./endpointmatcher";
import { TrafficPortSelector } from "./trafficportselector";
/**
 * Required. The type of endpoint policy. This is primarily used to validate the configuration.
 */
export declare enum EndpointPolicyTypeEnum {
    EndpointPolicyTypeUnspecified = "ENDPOINT_POLICY_TYPE_UNSPECIFIED",
    SidecarProxy = "SIDECAR_PROXY",
    GrpcServer = "GRPC_SERVER"
}
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
 */
export declare class EndpointPolicy extends SpeakeasyBase {
    /**
     * Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
     */
    authorizationPolicy?: string;
    /**
     * Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
     */
    clientTlsPolicy?: string;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * A definition of a matcher that selects endpoints to which the policies should be applied.
     */
    endpointMatcher?: EndpointMatcher;
    /**
     * Optional. Set of label tags associated with the EndpointPolicy resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
     */
    name?: string;
    /**
     * Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
     */
    serverTlsPolicy?: string;
    /**
     * Specification of a port-based selector.
     */
    trafficPortSelector?: TrafficPortSelector;
    /**
     * Required. The type of endpoint policy. This is primarily used to validate the configuration.
     */
    type?: EndpointPolicyTypeEnum;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
 */
export declare class EndpointPolicyInput extends SpeakeasyBase {
    /**
     * Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
     */
    authorizationPolicy?: string;
    /**
     * Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
     */
    clientTlsPolicy?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * A definition of a matcher that selects endpoints to which the policies should be applied.
     */
    endpointMatcher?: EndpointMatcher;
    /**
     * Optional. Set of label tags associated with the EndpointPolicy resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
     */
    name?: string;
    /**
     * Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
     */
    serverTlsPolicy?: string;
    /**
     * Specification of a port-based selector.
     */
    trafficPortSelector?: TrafficPortSelector;
    /**
     * Required. The type of endpoint policy. This is primarily used to validate the configuration.
     */
    type?: EndpointPolicyTypeEnum;
}
