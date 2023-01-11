package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest {
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams pathParams;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest withPathParams(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionPatchRequest request;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest withRequest(openapisdk.models.shared.SubscriptionPatchRequest request) {
        this.request = request;
        return this;
    }
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity security;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest withSecurity(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity security) {
        this.security = security;
        return this;
    }
}