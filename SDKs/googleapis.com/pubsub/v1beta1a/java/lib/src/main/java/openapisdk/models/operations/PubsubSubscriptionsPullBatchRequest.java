package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsPullBatchRequest {
    public PubsubSubscriptionsPullBatchQueryParams queryParams;
    public PubsubSubscriptionsPullBatchRequest withQueryParams(PubsubSubscriptionsPullBatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PullBatchRequest request;
    public PubsubSubscriptionsPullBatchRequest withRequest(openapisdk.models.shared.PullBatchRequest request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsPullBatchSecurity security;
    public PubsubSubscriptionsPullBatchRequest withSecurity(PubsubSubscriptionsPullBatchSecurity security) {
        this.security = security;
        return this;
    }
}