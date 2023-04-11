import { SpeakeasyBase } from "../../../internal/utils";
import { GatewaySecurityPolicy } from "./gatewaysecuritypolicy";
/**
 * Response returned by the ListGatewaySecurityPolicies method.
 */
export declare class ListGatewaySecurityPoliciesResponse extends SpeakeasyBase {
    /**
     * List of GatewaySecurityPolicies resources.
     */
    gatewaySecurityPolicies?: GatewaySecurityPolicy[];
    /**
     * If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.
     */
    nextPageToken?: string;
}
