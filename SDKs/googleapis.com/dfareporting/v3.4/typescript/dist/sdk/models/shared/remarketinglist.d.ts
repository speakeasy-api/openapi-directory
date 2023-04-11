import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { ListPopulationRule } from "./listpopulationrule";
/**
 * Product from which this remarketing list was originated.
 */
export declare enum RemarketingListListSourceEnum {
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
 * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
 */
export declare class RemarketingList extends SpeakeasyBase {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;
    /**
     * Whether this remarketing list is active.
     */
    active?: boolean;
    /**
     * Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
     */
    advertiserId?: string;
    /**
     * Represents a DimensionValue resource.
     */
    advertiserIdDimensionValue?: DimensionValue;
    /**
     * Remarketing list description.
     */
    description?: string;
    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
     */
    kind?: string;
    /**
     * Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.
     */
    lifeSpan?: string;
    /**
     * Remarketing List Population Rule.
     */
    listPopulationRule?: ListPopulationRule;
    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;
    /**
     * Product from which this remarketing list was originated.
     */
    listSource?: RemarketingListListSourceEnum;
    /**
     * Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
     */
    name?: string;
    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
}
