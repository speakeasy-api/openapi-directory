import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload } from "./googlecloudpaymentsresellersubscriptionv1googleonepayload";
import { GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload } from "./googlecloudpaymentsresellersubscriptionv1youtubepayload";
/**
 * Specifies product specific payload.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ProductPayload extends SpeakeasyBase {
    /**
     * Payload specific to Google One products.
     */
    googleOnePayload?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
    /**
     * Payload specific to Youtube products.
     */
    youtubePayload?: GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
}
