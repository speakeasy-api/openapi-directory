import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs extends SpeakeasyBase {
    /**
     * The network ID of the hub.
     */
    hubId: string;
    /**
     * Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub.
     */
    useDefaultRoute?: boolean;
}
/**
 * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
 */
export declare enum UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum {
    Hub = "hub",
    None = "none",
    Spoke = "spoke"
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets extends SpeakeasyBase {
    /**
     * The CIDR notation subnet used within the VPN
     */
    localSubnet: string;
    /**
     * Indicates the presence of the subnet in the VPN
     */
    useVpn?: boolean;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody extends SpeakeasyBase {
    /**
     * The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.
     */
    hubs?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[];
    /**
     * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
     */
    mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
    /**
     * The list of subnets and their VPN presence.
     */
    subnets?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[];
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs extends SpeakeasyBase {
    /**
     * The network ID of the hub.
     */
    hubId?: string;
    /**
     * Indicates whether default route traffic should be sent to this hub.
     */
    useDefaultRoute?: boolean;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONSubnets extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSON extends SpeakeasyBase {
    /**
     * The list of VPN hubs, in order of preference.
     */
    hubs?: UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONHubs[];
    /**
     * The site-to-site VPN mode.
     */
    mode?: string;
    /**
     * The list of subnets and their VPN presence.
     */
    subnets?: UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONSubnets[];
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject?: UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSON;
}
