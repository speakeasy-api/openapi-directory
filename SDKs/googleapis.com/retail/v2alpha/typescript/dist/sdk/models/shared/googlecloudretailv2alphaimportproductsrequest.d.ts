import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaProductInputConfigInput } from "./googlecloudretailv2alphaproductinputconfig";
/**
 * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
 */
export declare enum GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
 */
export declare class GoogleCloudRetailV2alphaImportProductsRequestInput extends SpeakeasyBase {
    /**
     * Configuration of destination for Import related errors.
     */
    errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;
    /**
     * The input config source for products.
     */
    inputConfig?: GoogleCloudRetailV2alphaProductInputConfigInput;
    /**
     * Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that `service-@gcp-sa-retail.iam.gserviceaccount.com` has the `pubsub.topics.publish` IAM permission on the topic.
     */
    notificationPubsubTopic?: string;
    /**
     * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;
    /**
     * Deprecated. This field has no effect.
     */
    requestId?: string;
    /**
     * If true, this performs the FULL import even if it would delete a large proportion of the products in the default branch, which could potentially cause outages if you have live predict/search traffic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.
     */
    skipDefaultBranchProtection?: boolean;
    /**
     * Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.
     */
    updateMask?: string;
}
