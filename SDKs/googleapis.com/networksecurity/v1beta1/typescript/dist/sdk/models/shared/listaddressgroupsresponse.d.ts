import { SpeakeasyBase } from "../../../internal/utils";
import { AddressGroup } from "./addressgroup";
/**
 * Response returned by the ListAddressGroups method.
 */
export declare class ListAddressGroupsResponse extends SpeakeasyBase {
    /**
     * List of AddressGroups resources.
     */
    addressGroups?: AddressGroup[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
