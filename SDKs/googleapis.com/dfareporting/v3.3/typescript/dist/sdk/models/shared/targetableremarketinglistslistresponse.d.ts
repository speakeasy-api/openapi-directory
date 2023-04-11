import { SpeakeasyBase } from "../../../internal/utils";
import { TargetableRemarketingList } from "./targetableremarketinglist";
/**
 * Targetable remarketing list response
 */
export declare class TargetableRemarketingListsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Targetable remarketing list collection.
     */
    targetableRemarketingLists?: TargetableRemarketingList[];
}
