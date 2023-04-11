import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallPortForwardingRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
