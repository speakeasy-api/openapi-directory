import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";
/**
 * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
 */
export declare class GoogleCloudChannelV1Sku extends SpeakeasyBase {
    /**
     * Represents the marketing information for a Product, SKU or Offer.
     */
    marketingInfo?: GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id}
     */
    name?: string;
    /**
     * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
     */
    product?: GoogleCloudChannelV1Product;
}
