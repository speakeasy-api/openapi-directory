import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchQosRulesOrderRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchQosRulesOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchQosRulesOrder200ApplicationJSONObject?: Record<string, any>;
}
