import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSiteToSiteVpnRequestBodyHubs extends SpeakeasyBase {
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
export declare enum UpdateNetworkSiteToSiteVpnRequestBodyModeEnum {
    Hub = "hub",
    None = "none",
    Spoke = "spoke"
}
export declare class UpdateNetworkSiteToSiteVpnRequestBodySubnets extends SpeakeasyBase {
    /**
     * The CIDR notation subnet used within the VPN
     */
    localSubnet: string;
    /**
     * Indicates the presence of the subnet in the VPN
     */
    useVpn?: boolean;
}
export declare class UpdateNetworkSiteToSiteVpnRequestBody extends SpeakeasyBase {
    /**
     * The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.
     */
    hubs?: UpdateNetworkSiteToSiteVpnRequestBodyHubs[];
    /**
     * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
     */
    mode: UpdateNetworkSiteToSiteVpnRequestBodyModeEnum;
    /**
     * The list of subnets and their VPN presence.
     */
    subnets?: UpdateNetworkSiteToSiteVpnRequestBodySubnets[];
}
export declare class UpdateNetworkSiteToSiteVpnRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSiteToSiteVpnRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSiteToSiteVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSiteToSiteVpn200ApplicationJSONObject?: Record<string, any>;
}
