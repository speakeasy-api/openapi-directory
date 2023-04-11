import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Exact product price.
 */
export declare class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice extends SpeakeasyBase {
    /**
     * Optional. Display price of the product.
     */
    displayPrice?: number;
    /**
     * Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'.
     */
    originalPrice?: number;
}
