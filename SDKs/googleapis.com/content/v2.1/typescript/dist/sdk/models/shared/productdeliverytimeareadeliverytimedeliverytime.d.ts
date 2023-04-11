import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A delivery time for this product.
 */
export declare class ProductDeliveryTimeAreaDeliveryTimeDeliveryTime extends SpeakeasyBase {
    /**
     * Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.
     */
    maxHandlingTimeDays?: number;
    /**
     * Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered.
     */
    maxTransitTimeDays?: number;
    /**
     * Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.
     */
    minHandlingTimeDays?: number;
    /**
     * Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered.
     */
    minTransitTimeDays?: number;
}
