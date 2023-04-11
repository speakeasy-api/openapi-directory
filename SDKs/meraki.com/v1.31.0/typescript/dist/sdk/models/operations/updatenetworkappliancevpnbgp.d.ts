import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Information regarding IPv6 address of the neighbor, Required if `ip` is not present.
 */
export declare class UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6 extends SpeakeasyBase {
    /**
     * The IPv6 address of the neighbor.
     */
    address: string;
}
export declare class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors extends SpeakeasyBase {
    /**
     * When this feature is on, the Meraki device will advertise routes learned from other Autonomous Systems, thereby allowing traffic between Autonomous Systems to transit this AS. When absent, it defaults to false.
     */
    allowTransit?: boolean;
    /**
     * The EBGP hold timer in seconds for each neighbor. The EBGP hold timer must be an integer between 12 and 240.
     */
    ebgpHoldTimer: number;
    /**
     * Configure this if the neighbor is not adjacent. The EBGP multi-hop must be an integer between 1 and 255.
     */
    ebgpMultihop: number;
    /**
     * The IPv4 address of the neighbor
     */
    ip?: string;
    /**
     * Information regarding IPv6 address of the neighbor, Required if `ip` is not present.
     */
    ipv6?: UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6;
    /**
     * The receive limit is the maximum number of routes that can be received from any BGP peer. The receive limit must be an integer between 0 and 4294967295. When absent, it defaults to 0.
     */
    receiveLimit?: number;
    /**
     * Remote ASN of the neighbor. The remote ASN must be an integer between 1 and 4294967295.
     */
    remoteAsNumber: number;
}
export declare class UpdateNetworkApplianceVpnBgpRequestBody extends SpeakeasyBase {
    /**
     * An Autonomous System Number (ASN) is required if you are to run BGP and peer with another BGP Speaker outside of the Auto VPN domain. This ASN will be applied to the entire Auto VPN domain. The entire 4-byte ASN range is supported. So, the ASN must be an integer between 1 and 4294967295. When absent, this field is not updated. If no value exists then it defaults to 64512.
     */
    asNumber?: number;
    /**
     * Boolean value to enable or disable the BGP configuration. When BGP is enabled, the asNumber (ASN) will be autopopulated with the preconfigured ASN at other Hubs or a default value if there is no ASN configured.
     */
    enabled: boolean;
    /**
     * The IBGP holdtimer in seconds. The IBGP holdtimer must be an integer between 12 and 240. When absent, this field is not updated. If no value exists then it defaults to 240.
     */
    ibgpHoldTimer?: number;
    /**
     * List of BGP neighbors. This list replaces the existing set of neighbors. When absent, this field is not updated.
     */
    neighbors?: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[];
}
export declare class UpdateNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceVpnBgpRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceVpnBgp200ApplicationJSONObject?: Record<string, any>;
}
