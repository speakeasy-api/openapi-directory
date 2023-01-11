package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsModifyAckDeadlineRequest {
    public PubsubSubscriptionsModifyAckDeadlineQueryParams queryParams;
    public PubsubSubscriptionsModifyAckDeadlineRequest withQueryParams(PubsubSubscriptionsModifyAckDeadlineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyAckDeadlineRequest request;
    public PubsubSubscriptionsModifyAckDeadlineRequest withRequest(openapisdk.models.shared.ModifyAckDeadlineRequest request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsModifyAckDeadlineSecurity security;
    public PubsubSubscriptionsModifyAckDeadlineRequest withSecurity(PubsubSubscriptionsModifyAckDeadlineSecurity security) {
        this.security = security;
        return this;
    }
}