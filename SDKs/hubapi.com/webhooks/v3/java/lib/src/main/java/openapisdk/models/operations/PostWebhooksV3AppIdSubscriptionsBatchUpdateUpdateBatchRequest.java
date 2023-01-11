package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest {
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams pathParams;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest withPathParams(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInputSubscriptionBatchUpdateRequest request;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest withRequest(openapisdk.models.shared.BatchInputSubscriptionBatchUpdateRequest request) {
        this.request = request;
        return this;
    }
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity security;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest withSecurity(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity security) {
        this.security = security;
        return this;
    }
}