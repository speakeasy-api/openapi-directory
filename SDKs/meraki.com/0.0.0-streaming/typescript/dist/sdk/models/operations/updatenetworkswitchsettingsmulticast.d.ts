import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
 */
export declare class UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings extends SpeakeasyBase {
    /**
     * Flood unknown multicast traffic setting for entire network
     */
    floodUnknownMulticastTrafficEnabled?: boolean;
    /**
     * IGMP snooping setting for entire network
     */
    igmpSnoopingEnabled?: boolean;
}
export declare class UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides extends SpeakeasyBase {
    /**
     * Flood unknown multicast traffic setting for switches, switch stacks or switch profiles
     */
    floodUnknownMulticastTrafficEnabled: boolean;
    /**
     * IGMP snooping setting for switches, switch stacks or switch profiles
     */
    igmpSnoopingEnabled: boolean;
    /**
     * List of switch stack ids for non-template network
     */
    stacks?: string[];
    /**
     * List of switch profiles ids for template network
     */
    switchProfiles?: string[];
    /**
     * List of switch serials for non-template network
     */
    switches?: string[];
}
export declare class UpdateNetworkSwitchSettingsMulticastRequestBody extends SpeakeasyBase {
    /**
     * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
     */
    defaultSettings?: UpdateNetworkSwitchSettingsMulticastRequestBodyDefaultSettings;
    /**
     * Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.
     */
    overrides?: UpdateNetworkSwitchSettingsMulticastRequestBodyOverrides[];
}
export declare class UpdateNetworkSwitchSettingsMulticastRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchSettingsMulticastRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchSettingsMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchSettingsMulticast200ApplicationJSONObject?: Record<string, any>;
}
