package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsPublishRequest {
    public PubsubTopicsPublishQueryParams queryParams;
    public PubsubTopicsPublishRequest withQueryParams(PubsubTopicsPublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublishRequest request;
    public PubsubTopicsPublishRequest withRequest(openapisdk.models.shared.PublishRequest request) {
        this.request = request;
        return this;
    }
    public PubsubTopicsPublishSecurity security;
    public PubsubTopicsPublishRequest withSecurity(PubsubTopicsPublishSecurity security) {
        this.security = security;
        return this;
    }
}