import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsQosRulesOrderRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject?: Record<string, any>;
}
