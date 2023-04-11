import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Represents a Square gift card.
 */
export declare class GiftCard extends SpeakeasyBase {
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
    balanceMoney?: Money;
    /**
     * The timestamp when the gift card was created, in RFC 3339 format.
     *
     * @remarks
     * In the case of a digital gift card, it is the time when you create a card
     * (using the Square Point of Sale application, Seller Dashboard, or Gift Cards API).
     * In the case of a plastic gift card, it is the time when Square associates the card with the
     * seller at the time of activation.
     */
    createdAt?: string;
    /**
     * The IDs of the customers to whom this gift card is linked.
     */
    customerIds?: string[];
    /**
     * The gift card account number.
     */
    gan?: string;
    ganSource?: any;
    /**
     * The Square-assigned ID of the gift card.
     */
    id?: string;
    state?: any;
    type: any;
}
