/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudRetailV2betaImportProductsRequestInput - Request message for Import methods.
 */
public class GoogleCloudRetailV2betaImportProductsRequestInput {
    /**
     * Configuration of destination for Import related errors.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorsConfig")
    public GoogleCloudRetailV2betaImportErrorsConfig errorsConfig;

    public GoogleCloudRetailV2betaImportProductsRequestInput withErrorsConfig(GoogleCloudRetailV2betaImportErrorsConfig errorsConfig) {
        this.errorsConfig = errorsConfig;
        return this;
    }
    
    /**
     * The input config source for products.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudRetailV2betaProductInputConfigInput inputConfig;

    public GoogleCloudRetailV2betaImportProductsRequestInput withInputConfig(GoogleCloudRetailV2betaProductInputConfigInput inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    
    /**
     * Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that both `cloud-retail-customer-data-access@system.gserviceaccount.com` and `service-@gcp-sa-retail.iam.gserviceaccount.com` have the `pubsub.topics.publish` IAM permission on the topic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationPubsubTopic")
    public String notificationPubsubTopic;

    public GoogleCloudRetailV2betaImportProductsRequestInput withNotificationPubsubTopic(String notificationPubsubTopic) {
        this.notificationPubsubTopic = notificationPubsubTopic;
        return this;
    }
    
    /**
     * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciliationMode")
    public GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum reconciliationMode;

    public GoogleCloudRetailV2betaImportProductsRequestInput withReconciliationMode(GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum reconciliationMode) {
        this.reconciliationMode = reconciliationMode;
        return this;
    }
    
    /**
     * Deprecated. This field has no effect.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;

    public GoogleCloudRetailV2betaImportProductsRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    
    /**
     * Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;

    public GoogleCloudRetailV2betaImportProductsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    
    public GoogleCloudRetailV2betaImportProductsRequestInput(){}
}
