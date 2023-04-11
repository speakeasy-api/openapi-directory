import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Extension } from "./googlecloudpaymentsresellersubscriptionv1extension";
/**
 * Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest extends SpeakeasyBase {
    /**
     * Describes the details of an extension request.
     */
    extension?: GoogleCloudPaymentsResellerSubscriptionV1Extension;
    /**
     * Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. A random UUID is recommended.
     */
    requestId?: string;
}
