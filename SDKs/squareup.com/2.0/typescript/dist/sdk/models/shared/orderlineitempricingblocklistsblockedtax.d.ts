import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tax to block from applying to a line item. The tax must be
 *
 * @remarks
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
export declare class OrderLineItemPricingBlocklistsBlockedTax extends SpeakeasyBase {
    /**
     * The `catalog_object_id` of the tax that should be blocked.
     *
     * @remarks
     * Use this field to block catalog taxes. For ad hoc taxes, use the
     * `tax_uid` field.
     */
    taxCatalogObjectId?: string;
    /**
     * The `uid` of the tax that should be blocked. Use this field to block
     *
     * @remarks
     * ad hoc taxes. For catalog, taxes use the `tax_catalog_object_id` field.
     */
    taxUid?: string;
    /**
     * A unique ID of the `BlockedTax` within the order.
     */
    uid?: string;
}
