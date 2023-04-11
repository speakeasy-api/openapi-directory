import { SpeakeasyBase } from "../../../internal/utils";
import { RemarketingList } from "./remarketinglist";
/**
 * Remarketing list response
 */
export declare class RemarketingListsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Remarketing list collection.
     */
    remarketingLists?: RemarketingList[];
}
