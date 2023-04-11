import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewingPlan } from "./autorenewingplan";
import { OfferDetails } from "./offerdetails";
import { PrepaidPlan } from "./prepaidplan";
/**
 * Item-level info for a subscription purchase.
 */
export declare class SubscriptionPurchaseLineItem extends SpeakeasyBase {
    /**
     * Information related to an auto renewing plan.
     */
    autoRenewingPlan?: AutoRenewingPlan;
    /**
     * Time at which the subscription expired or will expire unless the access is extended (ex. renews).
     */
    expiryTime?: string;
    /**
     * Offer details information related to a purchase line item.
     */
    offerDetails?: OfferDetails;
    /**
     * Information related to a prepaid plan.
     */
    prepaidPlan?: PrepaidPlan;
    /**
     * The purchased product ID (for example, 'monthly001').
     */
    productId?: string;
}
