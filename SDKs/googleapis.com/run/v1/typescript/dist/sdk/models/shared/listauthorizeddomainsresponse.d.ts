import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";
/**
 * A list of Authorized Domains.
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
