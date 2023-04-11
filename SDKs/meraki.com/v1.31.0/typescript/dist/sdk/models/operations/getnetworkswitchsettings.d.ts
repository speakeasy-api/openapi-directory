import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Per switch exception (combined, redundant, useNetworkSetting)
 */
export declare enum GetNetworkSwitchSettings200ApplicationJSONPowerExceptionsPowerTypeEnum {
    Combined = "combined",
    Redundant = "redundant",
    UseNetworkSetting = "useNetworkSetting"
}
export declare class GetNetworkSwitchSettings200ApplicationJSONPowerExceptions extends SpeakeasyBase {
    /**
     * Per switch exception (combined, redundant, useNetworkSetting)
     */
    powerType?: GetNetworkSwitchSettings200ApplicationJSONPowerExceptionsPowerTypeEnum;
    /**
     * Serial number of the switch
     */
    serial?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkSwitchSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Exceptions on a per switch basis to "useCombinedPower"
     */
    powerExceptions?: GetNetworkSwitchSettings200ApplicationJSONPowerExceptions[];
    /**
     * The use Combined Power as the default behavior of secondary power supplies on supported devices.
     */
    useCombinedPower?: boolean;
    /**
     * Management VLAN
     */
    vlan?: number;
}
export declare class GetNetworkSwitchSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettings200ApplicationJSONObject?: GetNetworkSwitchSettings200ApplicationJSON;
}
