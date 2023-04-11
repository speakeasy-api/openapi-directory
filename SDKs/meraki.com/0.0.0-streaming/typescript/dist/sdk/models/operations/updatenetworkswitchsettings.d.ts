import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Per switch exception (combined, redundant, useNetworkSetting)
 */
export declare enum UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum {
    Combined = "combined",
    Redundant = "redundant",
    UseNetworkSetting = "useNetworkSetting"
}
export declare class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions extends SpeakeasyBase {
    /**
     * Per switch exception (combined, redundant, useNetworkSetting)
     */
    powerType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
    /**
     * Serial number of the switch
     */
    serial: string;
}
export declare class UpdateNetworkSwitchSettingsRequestBody extends SpeakeasyBase {
    /**
     * Exceptions on a per switch basis to "useCombinedPower"
     */
    powerExceptions?: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[];
    /**
     * The use Combined Power as the default behavior of secondary power supplies on supported devices.
     */
    useCombinedPower?: boolean;
    /**
     * Management VLAN
     */
    vlan?: number;
}
export declare class UpdateNetworkSwitchSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchSettings200ApplicationJSONObject?: Record<string, any>;
}
