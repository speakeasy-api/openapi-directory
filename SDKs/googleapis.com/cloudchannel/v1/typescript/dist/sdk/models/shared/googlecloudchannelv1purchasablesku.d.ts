import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
/**
 * SKU that you can purchase. This is used in ListPurchasableSku API response.
 */
export declare class GoogleCloudChannelV1PurchasableSku extends SpeakeasyBase {
    /**
     * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
     */
    sku?: GoogleCloudChannelV1Sku;
}
