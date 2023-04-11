import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";
/**
 * Configs the prices in an available region.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig extends SpeakeasyBase {
    /**
     * Describes the amount unit including the currency code.
     */
    amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;
    /**
     * Output only. 2-letter ISO region code where the product is available in. Ex. "US".
     */
    regionCode?: string;
}
