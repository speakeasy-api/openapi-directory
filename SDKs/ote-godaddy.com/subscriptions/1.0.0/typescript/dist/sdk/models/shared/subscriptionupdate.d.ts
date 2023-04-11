import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the Subscription to change
 */
export declare class SubscriptionUpdate extends SpeakeasyBase {
    /**
     * Unique identifier of the payment profile you want to be used for automatic renewal
     */
    paymentProfileId?: number;
    /**
     * Whether or not you want the Subscription renew automatically
     */
    renewAuto?: boolean;
}
