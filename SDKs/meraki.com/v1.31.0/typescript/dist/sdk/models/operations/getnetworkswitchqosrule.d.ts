import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class GetNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchQosRule200ApplicationJSONObject?: Record<string, any>;
}
