import { SpeakeasyBase } from "../../../internal/utils";
import { TagHold } from "./taghold";
/**
 * The ListTagHolds response.
 */
export declare class ListTagHoldsResponse extends SpeakeasyBase {
    /**
     * Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime.
     */
    nextPageToken?: string;
    /**
     * A possibly paginated list of TagHolds.
     */
    tagHolds?: TagHold[];
}
