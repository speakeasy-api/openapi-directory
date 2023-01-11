package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsModifyPushConfigRequest {
    public PubsubSubscriptionsModifyPushConfigQueryParams queryParams;
    public PubsubSubscriptionsModifyPushConfigRequest withQueryParams(PubsubSubscriptionsModifyPushConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyPushConfigRequest request;
    public PubsubSubscriptionsModifyPushConfigRequest withRequest(openapisdk.models.shared.ModifyPushConfigRequest request) {
        this.request = request;
        return this;
    }
    public PubsubSubscriptionsModifyPushConfigSecurity security;
    public PubsubSubscriptionsModifyPushConfigRequest withSecurity(PubsubSubscriptionsModifyPushConfigSecurity security) {
        this.security = security;
        return this;
    }
}