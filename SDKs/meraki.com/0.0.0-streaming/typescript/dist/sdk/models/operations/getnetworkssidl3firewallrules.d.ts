import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSsidL3FirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkSsidL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSsidL3FirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
