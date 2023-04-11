import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject?: Record<string, any>;
}
