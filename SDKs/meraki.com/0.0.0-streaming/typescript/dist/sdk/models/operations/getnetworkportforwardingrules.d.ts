import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkPortForwardingRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
