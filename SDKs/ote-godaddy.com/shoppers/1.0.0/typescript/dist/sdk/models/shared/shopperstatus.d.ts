import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription.
 */
export declare enum ShopperStatusBillingStateEnum {
    Abandoned = "ABANDONED",
    Inactive = "INACTIVE",
    Active = "ACTIVE"
}
/**
 * Request was successful
 */
export declare class ShopperStatus extends SpeakeasyBase {
    /**
     * Indicates the billing state of the Shopper.<br />ABANDONED: The shopper has not been billed in at least 10 years and has no active subscriptions.<br />INACTIVE: The shopper has been billed within the last 10 years but has no active subscriptions.<br />ACTIVE: The shopper has at least one active subscription.
     */
    billingState?: ShopperStatusBillingStateEnum;
}
