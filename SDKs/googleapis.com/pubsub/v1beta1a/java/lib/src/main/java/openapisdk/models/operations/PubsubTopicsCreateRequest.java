package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsCreateRequest {
    public PubsubTopicsCreateQueryParams queryParams;
    public PubsubTopicsCreateRequest withQueryParams(PubsubTopicsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Topic request;
    public PubsubTopicsCreateRequest withRequest(openapisdk.models.shared.Topic request) {
        this.request = request;
        return this;
    }
    public PubsubTopicsCreateSecurity security;
    public PubsubTopicsCreateRequest withSecurity(PubsubTopicsCreateSecurity security) {
        this.security = security;
        return this;
    }
}