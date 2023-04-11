import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
 *
 * @remarks
 * Support is currently limited to USD, CAD and GBP currencies
 */
export declare class ChargeRequestAdditionalRecipient extends SpeakeasyBase {
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
    amountMoney: Money;
    /**
     * The description of the additional recipient.
     */
    description: string;
    /**
     * The location ID for a recipient (other than the merchant) receiving a portion of the tender.
     */
    locationId: string;
}
