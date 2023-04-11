import { SpeakeasyBase } from "../../../internal/utils";
import { GatewaySecurityPolicyRule } from "./gatewaysecuritypolicyrule";
/**
 * Response returned by the ListGatewaySecurityPolicyRules method.
 */
export declare class ListGatewaySecurityPolicyRulesResponse extends SpeakeasyBase {
    /**
     * List of GatewaySecurityPolicyRule resources.
     */
    gatewaySecurityPolicyRules?: GatewaySecurityPolicyRule[];
    /**
     * If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.
     */
    nextPageToken?: string;
}
