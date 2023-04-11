import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs extends SpeakeasyBase {
    /**
     * The network ID of the hub.
     */
    hubId?: string;
    /**
     * Indicates whether default route traffic should be sent to this hub.
     */
    useDefaultRoute?: boolean;
}
export declare class GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONSubnets extends SpeakeasyBase {
    /**
     * The CIDR notation subnet used within the VPN
     */
    localSubnet?: string;
    /**
     * Indicates the presence of the subnet in the VPN
     */
    useVpn?: boolean;
}
/**
 * Successful operation
 */
export declare class GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of VPN hubs, in order of preference.
     */
    hubs?: GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs[];
    /**
     * The site-to-site VPN mode.
     */
    mode?: string;
    /**
     * The list of subnets and their VPN presence.
     */
    subnets?: GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONSubnets[];
}
export declare class GetNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject?: GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSON;
}
