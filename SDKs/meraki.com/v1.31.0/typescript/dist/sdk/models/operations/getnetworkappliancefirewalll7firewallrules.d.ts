import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
