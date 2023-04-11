import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct, GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";
/**
 * Detailed product information associated with a user event.
 */
export declare class GoogleCloudRetailV2alphaProductDetailInput extends SpeakeasyBase {
    /**
     * Product captures all metadata information of items to be recommended or searched.
     */
    product?: GoogleCloudRetailV2alphaProductInput;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number;
}
/**
 * Detailed product information associated with a user event.
 */
export declare class GoogleCloudRetailV2alphaProductDetail extends SpeakeasyBase {
    /**
     * Product captures all metadata information of items to be recommended or searched.
     */
    product?: GoogleCloudRetailV2alphaProduct;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number;
}
