import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";
/**
 * Response message for AuthorizedDomains.ListAuthorizedDomains.
 */
export declare class ListAuthorizedDomainsResponse extends SpeakeasyBase {
    /**
     * The authorized domains belonging to the user.
     */
    domains?: AuthorizedDomain[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
