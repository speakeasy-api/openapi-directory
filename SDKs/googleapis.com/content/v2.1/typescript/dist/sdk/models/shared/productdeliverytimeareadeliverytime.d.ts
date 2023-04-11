import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryArea } from "./deliveryarea";
import { ProductDeliveryTimeAreaDeliveryTimeDeliveryTime } from "./productdeliverytimeareadeliverytimedeliverytime";
/**
 * A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
 */
export declare class ProductDeliveryTimeAreaDeliveryTime extends SpeakeasyBase {
    /**
     * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
     */
    deliveryArea?: DeliveryArea;
    /**
     * A delivery time for this product.
     */
    deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
}
