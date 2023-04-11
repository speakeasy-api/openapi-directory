import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER
 *
 * @remarks
 * (a third-party gift card).
 */
export declare class GiftCardActivityImport extends SpeakeasyBase {
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
}
