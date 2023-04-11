import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionAddon } from "./subscriptionaddon";
import { SubscriptionBilling } from "./subscriptionbilling";
import { SubscriptionProduct } from "./subscriptionproduct";
import { SubscriptionRelations } from "./subscriptionrelations";
/**
 * Whether the Subscription is active or the specific non-active state
 */
export declare enum SubscriptionStatusEnum {
    Active = "ACTIVE",
    Pending = "PENDING",
    Canceled = "CANCELED"
}
/**
 * Request was successful
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * An array of additional products that have been purchased to augment this Subscription
     */
    addons?: SubscriptionAddon[];
    billing: SubscriptionBilling;
    /**
     * Whether or not the Subscription is allowed to be canceled
     */
    cancelable?: boolean;
    /**
     * When the Subscription was created
     */
    createdAt: string;
    /**
     * When the Subscription will expire
     */
    expiresAt?: string;
    /**
     * A human readable description of this Subscription
     */
    label?: string;
    /**
     * The url to use or manage this Subscription's active product
     */
    launchUrl?: string;
    /**
     * Unique identifier of the payment profile that will be used to automatically renew this Subscription
     */
    paymentProfileId?: number;
    /**
     * Whether the renewal price will be based from the list price or a locked-in price for this shopper
     */
    priceLocked: boolean;
    product: SubscriptionProduct;
    relations?: SubscriptionRelations;
    /**
     * Whether or not the Subscription is set to be automatically renewed via the billing agent
     */
    renewAuto: boolean;
    /**
     * Whether or not the Subscription is allowed to be renewed
     */
    renewable: boolean;
    /**
     * Whether the Subscription is active or the specific non-active state
     */
    status: SubscriptionStatusEnum;
    /**
     * Unique identifier of the Subscription
     */
    subscriptionId: string;
    /**
     * Whether or not the Subscription is allowed to be upgraded
     */
    upgradeable: boolean;
}
