import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkL7FirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkL7FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
