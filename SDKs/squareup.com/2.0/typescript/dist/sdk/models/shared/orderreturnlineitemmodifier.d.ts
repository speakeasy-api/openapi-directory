import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * A line item modifier being returned.
 */
export declare class OrderReturnLineItemModifier extends SpeakeasyBase {
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
    basePriceMoney?: Money;
    /**
     * The catalog object ID referencing [CatalogModifier](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifier).
     */
    catalogObjectId?: string;
    /**
     * The version of the catalog object that this line item modifier references.
     */
    catalogVersion?: number;
    /**
     * The name of the item modifier.
     */
    name?: string;
    /**
     * The modifier `uid` from the order's line item that contains the
     *
     * @remarks
     * original sale of this line item modifier.
     */
    sourceModifierUid?: string;
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
    totalPriceMoney?: Money;
    /**
     * A unique ID that identifies the return modifier only within this order.
     */
    uid?: string;
}
