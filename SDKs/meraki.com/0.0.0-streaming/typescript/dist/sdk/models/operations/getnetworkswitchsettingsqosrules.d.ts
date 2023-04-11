import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsQosRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsQosRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsQosRules200ApplicationJSONObjects?: Record<string, any>[];
}
