import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Uniquely identifies a category in the API.
 *
 * @remarks
 *
 */
export declare class UpdateTransactionCategoryRequestData extends SpeakeasyBase {
    /**
     * The unique identifier of the category, as returned by the `/categories`
     *
     * @remarks
     * endpoint.
     *
     */
    id: string;
    /**
     * The type of this resource: `categories`
     */
    type: string;
}
/**
 * Request to update the category associated with a transaction.
 *
 * @remarks
 *
 */
export declare class UpdateTransactionCategoryRequest extends SpeakeasyBase {
    /**
     * The category to set on the transaction. Set this entire key to `null`
     *
     * @remarks
     * de-categorize a transaction.
     *
     */
    data: UpdateTransactionCategoryRequestData;
}
