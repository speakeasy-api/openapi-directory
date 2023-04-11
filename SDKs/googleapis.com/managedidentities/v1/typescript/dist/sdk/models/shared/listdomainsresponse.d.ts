import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Response message for ListDomains
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    /**
     * A list of Managed Identities Service domains in the project.
     */
    domains?: Domain[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
