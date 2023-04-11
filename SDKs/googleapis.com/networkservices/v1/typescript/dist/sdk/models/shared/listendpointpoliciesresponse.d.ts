import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPolicy } from "./endpointpolicy";
/**
 * Response returned by the ListEndpointPolicies method.
 */
export declare class ListEndpointPoliciesResponse extends SpeakeasyBase {
    /**
     * List of EndpointPolicy resources.
     */
    endpointPolicies?: EndpointPolicy[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
