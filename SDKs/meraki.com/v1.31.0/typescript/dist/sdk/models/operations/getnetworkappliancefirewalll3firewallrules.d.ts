import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
