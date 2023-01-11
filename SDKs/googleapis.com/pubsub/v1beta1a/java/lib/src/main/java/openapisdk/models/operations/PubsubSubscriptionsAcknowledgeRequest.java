package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsAcknowledgeRequest {
    public PubsubSubscriptionsAcknowledgeQueryParams queryParams;
    public PubsubSubscriptionsAcknowledgeRequest withQueryParams(PubsubSubscriptionsAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcknowledgeRequest request;
    public PubsubSubscriptionsAcknowledgeRequest withRequest(openapisdk.models.shared.AcknowledgeRequest request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsAcknowledgeSecurity security;
    public PubsubSubscriptionsAcknowledgeRequest withSecurity(PubsubSubscriptionsAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}