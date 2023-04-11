import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject?: Record<string, any>;
}
