import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Product price range when there are a range of prices for different variations of the same product.
 */
export declare class GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange extends SpeakeasyBase {
    /**
     * Required. The maximum product price.
     */
    max?: number;
    /**
     * Required. The minimum product price.
     */
    min?: number;
}
