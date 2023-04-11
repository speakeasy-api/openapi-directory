import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSwitchQosRulesOrderRequestBody extends SpeakeasyBase {
    /**
     * A list of quality of service rule IDs arranged in order in which they should be processed by the switch.
     */
    ruleIds: string[];
}
export declare class UpdateNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSwitchQosRulesOrderRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchQosRulesOrder200ApplicationJSONObject?: Record<string, any>;
}
