import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
 */
export declare class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings extends SpeakeasyBase {
    /**
     * Flood unknown multicast traffic setting for entire network
     */
    floodUnknownMulticastTrafficEnabled?: boolean;
    /**
     * IGMP snooping setting for entire network
     */
    igmpSnoopingEnabled?: boolean;
}
export declare class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides extends SpeakeasyBase {
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
export declare class UpdateNetworkSwitchRoutingMulticastRequestBody extends SpeakeasyBase {
    /**
     * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
     */
    defaultSettings?: UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
    /**
     * Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.
     */
    overrides?: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides[];
}
export declare class UpdateNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchRoutingMulticastRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchRoutingMulticast200ApplicationJSONObject?: Record<string, any>;
}
