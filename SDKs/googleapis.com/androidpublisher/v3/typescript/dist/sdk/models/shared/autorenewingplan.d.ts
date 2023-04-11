import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionItemPriceChangeDetails } from "./subscriptionitempricechangedetails";
/**
 * Information related to an auto renewing plan.
 */
export declare class AutoRenewingPlan extends SpeakeasyBase {
    /**
     * If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription
     */
    autoRenewEnabled?: boolean;
    /**
     * Price change related information of a subscription item.
     */
    priceChangeDetails?: SubscriptionItemPriceChangeDetails;
}
