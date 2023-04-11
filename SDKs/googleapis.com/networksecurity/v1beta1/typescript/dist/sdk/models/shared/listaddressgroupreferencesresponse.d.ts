import { SpeakeasyBase } from "../../../internal/utils";
import { ListAddressGroupReferencesResponseAddressGroupReference } from "./listaddressgroupreferencesresponseaddressgroupreference";
/**
 * Response of the ListAddressGroupReferences method.
 */
export declare class ListAddressGroupReferencesResponse extends SpeakeasyBase {
    /**
     * A list of references that matches the specified filter in the request.
     */
    addressGroupReferences?: ListAddressGroupReferencesResponseAddressGroupReference[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
