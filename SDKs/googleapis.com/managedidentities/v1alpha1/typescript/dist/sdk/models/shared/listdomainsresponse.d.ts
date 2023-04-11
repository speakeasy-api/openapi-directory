import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Successful response
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    /**
     * A list of Managed Identities Service domains in the project.
     */
    domains?: Domain[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
