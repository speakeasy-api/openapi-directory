import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalRecipient } from "./additionalrecipient";
import { Money } from "./money";
import { TenderCardDetails } from "./tendercarddetails";
import { TenderCashDetails } from "./tendercashdetails";
/**
 * Represents a tender (i.e., a method of payment) used in a Square transaction.
 */
export declare class Tender extends SpeakeasyBase {
    /**
     * Additional recipients (other than the merchant) receiving a portion of this tender.
     *
     * @remarks
     * For example, fees assessed on the purchase by a third party integration.
     */
    additionalRecipients?: AdditionalRecipient[];
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
    amountMoney?: Money;
    /**
     * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
     */
    cardDetails?: TenderCardDetails;
    /**
     * Represents the details of a tender with `type` `CASH`.
     */
    cashDetails?: TenderCashDetails;
    /**
     * The timestamp for when the tender was created, in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * If the tender is associated with a customer or represents a customer's card on file,
     *
     * @remarks
     * this is the ID of the associated customer.
     */
    customerId?: string;
    /**
     * The tender's unique ID.
     */
    id?: string;
    /**
     * The ID of the transaction's associated location.
     */
    locationId?: string;
    /**
     * An optional note associated with the tender at the time of payment.
     */
    note?: string;
    /**
     * The ID of the [Payment](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment) that corresponds to this tender.
     *
     * @remarks
     * This value is only present for payments created with the v2 Payments API.
     */
    paymentId?: string;
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
    processingFeeMoney?: Money;
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
    tipMoney?: Money;
    /**
     * The ID of the tender's associated transaction.
     */
    transactionId?: string;
    /**
     * The type of tender, such as `CARD` or `CASH`.
     */
    type: string;
}
