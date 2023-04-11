import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
 */
export declare enum UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum {
    MinimizeClientDowntime = "minimizeClientDowntime",
    MinimizeUpgradeTime = "minimizeUpgradeTime"
}
export declare class UpdateNetworkWirelessSettingsRequestBody extends SpeakeasyBase {
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
     * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
     */
    upgradeStrategy?: UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
}
export declare class UpdateNetworkWirelessSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSettingsRequestBody;
    networkId: string;
}
/**
 * Named VLAN Pool DHCP Monitoring settings.
 */
export declare class UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring extends SpeakeasyBase {
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
export declare class UpdateNetworkWirelessSettings200ApplicationJSONNamedVlans extends SpeakeasyBase {
    /**
     * Named VLAN Pool DHCP Monitoring settings.
     */
    poolDhcpMonitoring?: UpdateNetworkWirelessSettings200ApplicationJSONNamedVlansPoolDhcpMonitoring;
}
/**
 * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
 */
export declare enum UpdateNetworkWirelessSettings200ApplicationJSONUpgradeStrategyEnum {
    MinimizeClientDowntime = "minimizeClientDowntime",
    MinimizeUpgradeTime = "minimizeUpgradeTime"
}
/**
 * Successful operation
 */
export declare class UpdateNetworkWirelessSettings200ApplicationJSON extends SpeakeasyBase {
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
    namedVlans?: UpdateNetworkWirelessSettings200ApplicationJSONNamedVlans;
    /**
     * The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'
     */
    upgradeStrategy?: UpdateNetworkWirelessSettings200ApplicationJSONUpgradeStrategyEnum;
}
export declare class UpdateNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSettings200ApplicationJSONObject?: UpdateNetworkWirelessSettings200ApplicationJSON;
}
