import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * The response to listing Domains.
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    /**
     * The list of domains, if any exist.
     */
    domains?: Domain[];
    /**
     * The pagination token, if more results exist.
     */
    nextPageToken?: string;
}
