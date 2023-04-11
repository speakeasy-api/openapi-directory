import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaProductInputConfigInput } from "./googlecloudretailv2betaproductinputconfig";
/**
 * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
 */
export declare enum GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
 */
export declare class GoogleCloudRetailV2betaImportProductsRequestInput extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;
    /**
     * The input config source for products.
     */
    inputConfig?: GoogleCloudRetailV2betaProductInputConfigInput;
    /**
     * Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that `service-@gcp-sa-retail.iam.gserviceaccount.com` has the `pubsub.topics.publish` IAM permission on the topic.
     */
    notificationPubsubTopic?: string;
    /**
     * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;
    /**
     * Deprecated. This field has no effect.
     */
    requestId?: string;
    /**
     * Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.
     */
    updateMask?: string;
}
