import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationPolicy } from "./authorizationpolicy";
/**
 * Response returned by the ListAuthorizationPolicies method.
 */
export declare class ListAuthorizationPoliciesResponse extends SpeakeasyBase {
    /**
     * List of AuthorizationPolicies resources.
     */
    authorizationPolicies?: AuthorizationPolicy[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
