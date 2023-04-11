import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
 */
export declare class RemarketingListShare extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
     */
    kind?: string;
    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    remarketingListId?: string;
    /**
     * Accounts that the remarketing list is shared with.
     */
    sharedAccountIds?: string[];
    /**
     * Advertisers that the remarketing list is shared with.
     */
    sharedAdvertiserIds?: string[];
}
