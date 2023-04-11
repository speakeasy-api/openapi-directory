import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderCustomerMarketingRightsInfo extends SpeakeasyBase {
    /**
     * Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`"
     */
    explicitMarketingPreference?: string;
    /**
     * Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
     */
    lastUpdatedTimestamp?: string;
    /**
     * Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account.
     */
    marketingEmailAddress?: string;
}
