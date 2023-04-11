import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Represents a Quick Amount in the Catalog.
 */
export declare class CatalogQuickAmount extends SpeakeasyBase {
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
    amount: Money;
    /**
     * The order in which this Quick Amount should be displayed.
     */
    ordinal?: number;
    /**
     * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100].
     *
     * @remarks
     * MANUAL type amount will always have score = 100.
     */
    score?: number;
    /**
     * Represents the type of the Quick Amount.
     */
    type: string;
}
