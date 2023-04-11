import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Product, GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";
/**
 * Detailed product information associated with a user event.
 */
export declare class GoogleCloudRetailV2ProductDetailInput extends SpeakeasyBase {
    /**
     * Product captures all metadata information of items to be recommended or searched.
     */
    product?: GoogleCloudRetailV2ProductInput;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number;
}
/**
 * Detailed product information associated with a user event.
 */
export declare class GoogleCloudRetailV2ProductDetail extends SpeakeasyBase {
    /**
     * Product captures all metadata information of items to be recommended or searched.
     */
    product?: GoogleCloudRetailV2Product;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number;
}
