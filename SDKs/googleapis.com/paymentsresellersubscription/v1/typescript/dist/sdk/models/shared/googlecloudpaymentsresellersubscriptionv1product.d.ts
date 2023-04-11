import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";
import { GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig } from "./googlecloudpaymentsresellersubscriptionv1productpriceconfig";
import { GoogleTypeLocalizedText } from "./googletypelocalizedtext";
/**
 * A Product resource that defines a subscription service that can be resold.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Product extends SpeakeasyBase {
    /**
     * Output only. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}"
     */
    name?: string;
    /**
     * Output only. Price configs for the product in the available regions.
     */
    priceConfigs?: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[];
    /**
     * Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1
     */
    regionCodes?: string[];
    /**
     * Describes the length of a period of a time.
     */
    subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;
    /**
     * Output only. Localized human readable name of the product.
     */
    titles?: GoogleTypeLocalizedText[];
}
