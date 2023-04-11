import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The connected Stripe account for a developer
 */
export declare class Account extends SpeakeasyBase {
    /**
     * The name of the Stripe account
     */
    accountName: string;
    /**
     * The country for this Stripe account
     */
    country: string;
    /**
     * The default currency for this Stripe account
     */
    defaultCurrency: string;
    /**
     * The id of the Stripe account
     */
    stripeId: string;
}
