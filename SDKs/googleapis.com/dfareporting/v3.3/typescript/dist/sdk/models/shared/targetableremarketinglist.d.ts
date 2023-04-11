import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Product from which this targetable remarketing list was originated.
 */
export declare enum TargetableRemarketingListListSourceEnum {
    RemarketingListSourceOther = "REMARKETING_LIST_SOURCE_OTHER",
    RemarketingListSourceAdx = "REMARKETING_LIST_SOURCE_ADX",
    RemarketingListSourceDfp = "REMARKETING_LIST_SOURCE_DFP",
    RemarketingListSourceXfp = "REMARKETING_LIST_SOURCE_XFP",
    RemarketingListSourceDfa = "REMARKETING_LIST_SOURCE_DFA",
    RemarketingListSourceGa = "REMARKETING_LIST_SOURCE_GA",
    RemarketingListSourceYoutube = "REMARKETING_LIST_SOURCE_YOUTUBE",
    RemarketingListSourceDbm = "REMARKETING_LIST_SOURCE_DBM",
    RemarketingListSourceGplus = "REMARKETING_LIST_SOURCE_GPLUS",
    RemarketingListSourceDmp = "REMARKETING_LIST_SOURCE_DMP",
    RemarketingListSourcePlayStore = "REMARKETING_LIST_SOURCE_PLAY_STORE"
}
/**
 * Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
 */
export declare class TargetableRemarketingList extends SpeakeasyBase {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;
    /**
     * Whether this targetable remarketing list is active.
     */
    active?: boolean;
    /**
     * Dimension value for the advertiser ID that owns this targetable remarketing list.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Targetable remarketing list description.
     */
    description?: string;
    /**
     * Targetable remarketing list ID.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
     */
    kind?: string;
    /**
     * Number of days that a user should remain in the targetable remarketing list without an impression.
     */
    lifeSpan?: string;
    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;
    /**
     * Product from which this targetable remarketing list was originated.
     */
    listSource?: TargetableRemarketingListListSourceEnum;
    /**
     * Name of the targetable remarketing list. Is no greater than 128 characters long.
     */
    name?: string;
    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
}
