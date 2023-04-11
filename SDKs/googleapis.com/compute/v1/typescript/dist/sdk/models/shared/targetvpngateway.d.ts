import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The status of the VPN gateway, which can be one of the following: CREATING, READY, FAILED, or DELETING.
 */
export declare enum TargetVpnGatewayStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Ready = "READY"
}
/**
 * Represents a Target VPN Gateway resource. The target VPN gateway resource represents a Classic Cloud VPN gateway. For more information, read the the Cloud VPN Overview.
 */
export declare class TargetVpnGateway extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated with a VPN gateway.
     */
    forwardingRules?: string[];
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
     */
    network?: string;
    /**
     * [Output Only] URL of the region where the target VPN gateway resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The status of the VPN gateway, which can be one of the following: CREATING, READY, FAILED, or DELETING.
     */
    status?: TargetVpnGatewayStatusEnum;
    /**
     * [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using the compute.vpntunnels.insert method and associated with a VPN gateway.
     */
    tunnels?: string[];
}
