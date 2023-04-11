import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject?: Record<string, any>;
}
