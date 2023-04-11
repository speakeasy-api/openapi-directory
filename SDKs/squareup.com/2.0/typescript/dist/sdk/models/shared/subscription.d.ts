import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Represents a customer subscription to a subscription plan.
 *
 * @remarks
 * For an overview of the `Subscription` type, see
 * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
 */
export declare class Subscription extends SpeakeasyBase {
    /**
     * The subscription cancellation date, in YYYY-MM-DD format (for
     *
     * @remarks
     * example, 2013-01-15). On this date, the subscription status changes
     * to `CANCELED` and the subscription billing stops.
     * If you don't set this field, the subscription plan dictates if and
     * when subscription ends.
     *
     * You cannot update this field, you can only clear it.
     */
    canceledDate?: string;
    /**
     * The ID of the [customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) [card](https://developer.squareup.com/reference/square_2021-08-18/objects/Card)
     *
     * @remarks
     * that is charged for the subscription.
     */
    cardId?: string;
    /**
     * The date up to which the customer is invoiced for the
     *
     * @remarks
     * subscription, in YYYY-MM-DD format (for example, 2013-01-15).
     *
     * After the invoice is sent for a given billing period,
     * this date will be the last day of the billing period.
     * For example,
     * suppose for the month of May a customer gets an invoice
     * (or charged the card) on May 1. For the monthly billing scenario,
     * this date is then set to May 31.
     */
    chargedThroughDate?: string;
    /**
     * The timestamp when the subscription was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The ID of the associated [customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) profile.
     */
    customerId?: string;
    /**
     * The Square-assigned ID of the subscription.
     */
    id?: string;
    /**
     * The IDs of the [invoices](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) created for the
     *
     * @remarks
     * subscription, listed in order when the invoices were created
     * (oldest invoices appear first).
     */
    invoiceIds?: string[];
    /**
     * The ID of the location associated with the subscription.
     */
    locationId?: string;
    /**
     * The ID of the associated [subscription plan](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogSubscriptionPlan).
     */
    planId?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    priceOverrideMoney?: Money;
    /**
     * The start date of the subscription, in YYYY-MM-DD format (for example,
     *
     * @remarks
     * 2013-01-15).
     */
    startDate?: string;
    /**
     * The current status of the subscription.
     */
    status?: string;
    /**
     * The tax amount applied when billing the subscription. The
     *
     * @remarks
     * percentage is expressed in decimal form, using a `'.'` as the decimal
     * separator and without a `'%'` sign. For example, a value of `7.5`
     * corresponds to 7.5%.
     */
    taxPercentage?: string;
    /**
     * Timezone that will be used in date calculations for the subscription.
     *
     * @remarks
     * Defaults to the timezone of the location based on `location_id`.
     * Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`).
     */
    timezone?: string;
    /**
     * The version of the object. When updating an object, the version
     *
     * @remarks
     * supplied must match the version in the database, otherwise the write will
     * be rejected as conflicting.
     */
    version?: number;
}
