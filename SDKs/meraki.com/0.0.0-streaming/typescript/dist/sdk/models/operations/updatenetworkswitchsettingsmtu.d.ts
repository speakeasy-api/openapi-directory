import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchSettingsMtuRequestBodyOverrides extends SpeakeasyBase {
    /**
     * MTU size for the switches or switch profiles.
     */
    mtuSize: number;
    /**
     * List of switch profile IDs. Applicable only for template network.
     */
    switchProfiles?: string[];
    /**
     * List of switch serials. Applicable only for switch network.
     */
    switches?: string[];
}
export declare class UpdateNetworkSwitchSettingsMtuRequestBody extends SpeakeasyBase {
    /**
     * MTU size for the entire network. Default value is 9578.
     */
    defaultMtuSize?: number;
    /**
     * Override MTU size for individual switches or switch profiles. An empty array will clear overrides.
     */
    overrides?: UpdateNetworkSwitchSettingsMtuRequestBodyOverrides[];
}
export declare class UpdateNetworkSwitchSettingsMtuRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchSettingsMtuRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchSettingsMtuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchSettingsMtu200ApplicationJSONObject?: Record<string, any>;
}
