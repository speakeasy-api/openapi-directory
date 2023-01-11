package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsPublishBatchRequest {
    public PubsubTopicsPublishBatchQueryParams queryParams;
    public PubsubTopicsPublishBatchRequest withQueryParams(PubsubTopicsPublishBatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublishBatchRequest request;
    public PubsubTopicsPublishBatchRequest withRequest(openapisdk.models.shared.PublishBatchRequest request) {
        this.request = request;
        return this;
    }
    public PubsubTopicsPublishBatchSecurity security;
    public PubsubTopicsPublishBatchRequest withSecurity(PubsubTopicsPublishBatchSecurity security) {
        this.security = security;
        return this;
    }
}