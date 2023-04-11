import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Named VLAN Pool DHCP Monitoring settings.
 */
export declare class GetNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring extends SpeakeasyBase {
    /**
     * The duration in minutes that devices will refrain from using dirty VLANs before adding them back to the pool.
     */
    duration?: number;
    /**
     * Whether or not devices using named VLAN pools should remove dirty VLANs from the pool, thereby preventing clients from being assigned to VLANs where they would be unable to obtain an IP address via DHCP
     */
    enabled?: boolean;
}
/**
 * Named VLAN settings for wireless networks.
 */
export declare class GetNetworkWirelessSettings200ApplicationJSONNamedVlans extends SpeakeasyBase {
    /**
     * Named VLAN Pool DHCP Monitoring settings.
     */
    poolDhcpMonitoring?: GetNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring;
}
/**
 * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
 */
export declare enum GetNetworkWirelessSettings200ApplicationJSONUpgradeStrategyEnum {
    MinimizeClientDowntime = "minimizeClientDowntime",
    MinimizeUpgradeTime = "minimizeUpgradeTime"
}
/**
 * Successful operation
 */
export declare class GetNetworkWirelessSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)
     */
    ipv6BridgeEnabled?: boolean;
    /**
     * Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)
     */
    ledLightsOn?: boolean;
    /**
     * Toggle for enabling or disabling location analytics for your network
     */
    locationAnalyticsEnabled?: boolean;
    /**
     * Toggle for enabling or disabling meshing in a network
     */
    meshingEnabled?: boolean;
    /**
     * Named VLAN settings for wireless networks.
     */
    namedVlans?: GetNetworkWirelessSettings200ApplicationJSONNamedVlans;
    /**
     * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
     */
    upgradeStrategy?: GetNetworkWirelessSettings200ApplicationJSONUpgradeStrategyEnum;
}
export declare class GetNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSettings200ApplicationJSONObject?: GetNetworkWirelessSettings200ApplicationJSON;
}
