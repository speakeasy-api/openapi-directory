import { SpeakeasyBase } from "../../../internal/utils";
import { ClientTlsPolicy } from "./clienttlspolicy";
/**
 * Response returned by the ListClientTlsPolicies method.
 */
export declare class ListClientTlsPoliciesResponse extends SpeakeasyBase {
    /**
     * List of ClientTlsPolicy resources.
     */
    clientTlsPolicies?: ClientTlsPolicy[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
