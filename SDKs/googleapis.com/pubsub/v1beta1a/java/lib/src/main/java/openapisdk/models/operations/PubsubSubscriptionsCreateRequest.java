package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsCreateRequest {
    public PubsubSubscriptionsCreateQueryParams queryParams;
    public PubsubSubscriptionsCreateRequest withQueryParams(PubsubSubscriptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subscription request;
    public PubsubSubscriptionsCreateRequest withRequest(openapisdk.models.shared.Subscription request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsCreateSecurity security;
    public PubsubSubscriptionsCreateRequest withSecurity(PubsubSubscriptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}