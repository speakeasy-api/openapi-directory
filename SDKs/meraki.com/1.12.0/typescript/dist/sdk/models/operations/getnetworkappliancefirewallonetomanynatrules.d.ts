import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallOneToManyNatRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallOneToManyNatRulesPathParams;
}
export declare class GetNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject?: Record<string, any>;
}
