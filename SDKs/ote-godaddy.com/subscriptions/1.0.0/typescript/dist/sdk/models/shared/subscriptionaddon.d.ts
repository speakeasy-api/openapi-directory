import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The financial commitment the customer has in the product
 */
export declare enum SubscriptionAddonCommitmentEnum {
    Paid = "PAID",
    Free = "FREE",
    Trial = "TRIAL"
}
export declare class SubscriptionAddon extends SpeakeasyBase {
    /**
     * The financial commitment the customer has in the product
     */
    commitment: SubscriptionAddonCommitmentEnum;
    /**
     * Unique identifier of the add-in product
     */
    pfid: number;
    quantity: number;
}
