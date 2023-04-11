import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List account, subaccount, advertiser, and campaign associated with a given Billing Profile.
 */
export declare class BillingAssignment extends SpeakeasyBase {
    /**
     * ID of the account associated with the billing assignment.This is a read-only, auto-generated field.
     */
    accountId?: string;
    /**
     * ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser
     */
    advertiserId?: string;
    /**
     * ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign
     */
    campaignId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment".
     */
    kind?: string;
    /**
     * ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field.
     */
    subaccountId?: string;
}
