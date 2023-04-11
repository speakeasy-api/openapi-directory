import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A discount to block from applying to a line item. The discount must be
 *
 * @remarks
 * identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
 */
export declare class OrderLineItemPricingBlocklistsBlockedDiscount extends SpeakeasyBase {
    /**
     * The `catalog_object_id` of the discount that should be blocked.
     *
     * @remarks
     * Use this field to block catalog discounts. For ad hoc discounts, use the
     * `discount_uid` field.
     */
    discountCatalogObjectId?: string;
    /**
     * The `uid` of the discount that should be blocked. Use this field to block
     *
     * @remarks
     * ad hoc discounts. For catalog discounts, use the `discount_catalog_object_id` field.
     */
    discountUid?: string;
    /**
     * A unique ID of the `BlockedDiscount` within the order.
     */
    uid?: string;
}
