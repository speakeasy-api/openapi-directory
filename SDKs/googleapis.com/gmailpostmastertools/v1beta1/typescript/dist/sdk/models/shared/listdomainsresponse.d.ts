import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Response message for ListDomains.
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    /**
     * The list of domains.
     */
    domains?: Domain[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
