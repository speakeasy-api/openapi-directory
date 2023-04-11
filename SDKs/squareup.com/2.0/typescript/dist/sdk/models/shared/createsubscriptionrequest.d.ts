import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Defines parameters in a
 *
 * @remarks
 * [CreateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/create-subscription) endpoint request.
 */
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    /**
     * The date when the subscription should be canceled, in
     *
     * @remarks
     * YYYY-MM-DD format (for example, 2025-02-29). This overrides the plan configuration
     * if it comes before the date the subscription would otherwise end.
     */
    canceledDate?: string;
    /**
     * The ID of the [customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) [card](https://developer.squareup.com/reference/square_2021-08-18/objects/Card) to charge.
     *
     * @remarks
     * If not specified, Square sends an invoice via email. For an example to
     * create a customer and add a card on file, see [Subscriptions Walkthrough](https://developer.squareup.com/docs/subscriptions-api/walkthrough).
     */
    cardId?: string;
    /**
     * The ID of the [customer](https://developer.squareup.com/reference/square_2021-08-18/objects/Customer) profile.
     */
    customerId: string;
    /**
     * A unique string that identifies this `CreateSubscription` request.
     *
     * @remarks
     * If you do not provide a unique string (or provide an empty string as the value),
     * the endpoint treats each request as independent.
     *
     * For more information, see [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey?: string;
    /**
     * The ID of the location the subscription is associated with.
     */
    locationId: string;
    /**
     * The ID of the subscription plan created using the Catalog API.
     *
     * @remarks
     * For more information, see
     * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan) and
     * [Subscriptions Walkthrough](https://developer.squareup.com/docs/subscriptions-api/walkthrough).
     */
    planId: string;
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
     * The start date of the subscription, in YYYY-MM-DD format. For example,
     *
     * @remarks
     * 2013-01-15. If the start date is left empty, the subscription begins
     * immediately.
     */
    startDate?: string;
    /**
     * The tax to add when billing the subscription.
     *
     * @remarks
     * The percentage is expressed in decimal form, using a `'.'` as the decimal
     * separator and without a `'%'` sign. For example, a value of 7.5
     * corresponds to 7.5%.
     */
    taxPercentage?: string;
    /**
     * The timezone that is used in date calculations for the subscription. If unset, defaults to
     *
     * @remarks
     * the location timezone. If a timezone is not configured for the location, defaults to "America/New_York".
     * Format: the IANA Timezone Database identifier for the location timezone. For
     * a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
     */
    timezone?: string;
}
