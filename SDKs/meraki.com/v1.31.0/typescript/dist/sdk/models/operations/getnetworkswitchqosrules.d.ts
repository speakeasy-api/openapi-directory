import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchQosRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchQosRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchQosRules200ApplicationJSONObjects?: Record<string, any>[];
}
