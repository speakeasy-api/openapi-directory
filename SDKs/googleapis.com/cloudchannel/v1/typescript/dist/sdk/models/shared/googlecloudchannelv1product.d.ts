import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1MarketingInfo } from "./googlecloudchannelv1marketinginfo";
/**
 * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
 */
export declare class GoogleCloudChannelV1Product extends SpeakeasyBase {
    /**
     * Represents the marketing information for a Product, SKU or Offer.
     */
    marketingInfo?: GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the Product. Format: products/{product_id}
     */
    name?: string;
}
