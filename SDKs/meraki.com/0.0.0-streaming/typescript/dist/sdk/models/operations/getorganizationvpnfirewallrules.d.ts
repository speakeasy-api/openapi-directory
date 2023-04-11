import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationVpnFirewallRulesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationVpnFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationVpnFirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
