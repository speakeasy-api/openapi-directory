import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkL3FirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkL3FirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
