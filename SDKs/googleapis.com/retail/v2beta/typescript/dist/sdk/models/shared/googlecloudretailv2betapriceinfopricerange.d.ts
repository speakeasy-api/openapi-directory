import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";
/**
 * The price range of all variant Product having the same Product.primary_product_id.
 */
export declare class GoogleCloudRetailV2betaPriceInfoPriceRange extends SpeakeasyBase {
    /**
     * A floating point interval.
     */
    originalPrice?: GoogleCloudRetailV2betaInterval;
    /**
     * A floating point interval.
     */
    price?: GoogleCloudRetailV2betaInterval;
}
