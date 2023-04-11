import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityAwareProxyClient } from "./identityawareproxyclient";
/**
 * Response message for ListIdentityAwareProxyClients.
 */
export declare class ListIdentityAwareProxyClientsResponse extends SpeakeasyBase {
    /**
     * Clients existing in the brand.
     */
    identityAwareProxyClients?: IdentityAwareProxyClient[];
    /**
     * A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
