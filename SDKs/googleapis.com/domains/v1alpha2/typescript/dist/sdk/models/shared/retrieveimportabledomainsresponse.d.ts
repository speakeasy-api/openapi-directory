import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Response for the `RetrieveImportableDomains` method.
 */
export declare class RetrieveImportableDomainsResponse extends SpeakeasyBase {
    /**
     * A list of domains that the calling user manages in Google Domains.
     */
    domains?: Domain[];
    /**
     * When present, there are more results to retrieve. Set `page_token` to this value on a subsequent call to get the next page of results.
     */
    nextPageToken?: string;
}
