import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchSettingsQosRuleRequest extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class GetNetworkSwitchSettingsQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchSettingsQosRule200ApplicationJSONObject?: Record<string, any>;
}
