import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Defines an accrual rule, which is how buyers can earn points.
 */
export declare class LoyaltyProgramAccrualRule extends SpeakeasyBase {
    /**
     * The type of the accrual rule that defines how buyers can earn points.
     */
    accrualType: string;
    /**
     * When the accrual rule is item-based or category-based, this field specifies the ID
     *
     * @remarks
     * of the [catalog object](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) that buyers can purchase to earn points.
     * If `accrual_type` is `ITEM_VARIATION`, the object is an item variation.
     * If `accrual_type` is `CATEGORY`, the object is a category.
     */
    catalogObjectId?: string;
    /**
     * When the accrual rule is spend-based (`accrual_type` is `SPEND`), this field
     *
     * @remarks
     * lists the IDs of any `CATEGORY` catalog objects that are excluded from points accrual.
     *
     * You can use the [BatchRetrieveCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/batch-retrieve-catalog-objects)
     * endpoint to retrieve information about the excluded categories.
     */
    excludedCategoryIds?: string[];
    /**
     * When the accrual rule is spend-based (`accrual_type` is `SPEND`), this field
     *
     * @remarks
     * lists the IDs of any `ITEM_VARIATION` catalog objects that are excluded from points accrual.
     *
     * You can use the [BatchRetrieveCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/batch-retrieve-catalog-objects)
     * endpoint to retrieve information about the excluded item variations.
     */
    excludedItemVariationIds?: string[];
    /**
     * The number of points that
     *
     * @remarks
     * buyers earn based on the `accrual_type`.
     */
    points?: number;
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
    spendAmountMoney?: Money;
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
    visitMinimumAmountMoney?: Money;
}
