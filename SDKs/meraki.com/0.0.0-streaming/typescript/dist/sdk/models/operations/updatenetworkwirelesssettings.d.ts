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
export declare class UpdateNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSettings200ApplicationJSONObject?: Record<string, any>;
}
