import { SpeakeasyBase } from "../../../internal/utils";
import { DnsAuthorization } from "./dnsauthorization";
/**
 * Response for the `ListDnsAuthorizations` method.
 */
export declare class ListDnsAuthorizationsResponse extends SpeakeasyBase {
    /**
     * A list of dns authorizations for the parent resource.
     */
    dnsAuthorizations?: DnsAuthorization[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
