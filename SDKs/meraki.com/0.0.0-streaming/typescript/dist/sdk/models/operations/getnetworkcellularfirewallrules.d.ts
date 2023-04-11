import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCellularFirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCellularFirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
