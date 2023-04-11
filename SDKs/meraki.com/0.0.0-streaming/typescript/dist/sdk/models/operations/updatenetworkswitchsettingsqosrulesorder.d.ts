import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchSettingsQosRulesOrderRequestBody extends SpeakeasyBase {
    /**
     * A list of quality of service rule IDs arranged in order in which they should be processed by the switch.
     */
    ruleIds: string[];
}
export declare class UpdateNetworkSwitchSettingsQosRulesOrderRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSwitchSettingsQosRulesOrderRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchSettingsQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchSettingsQosRulesOrder200ApplicationJSONObject?: Record<string, any>;
}
