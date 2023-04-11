import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A condition that applies the override if a line item SKU is found in the SKU group.
 */
export declare class GoogleCloudChannelV1SkuGroupCondition extends SpeakeasyBase {
    /**
     * Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041".
     */
    skuGroup?: string;
}
