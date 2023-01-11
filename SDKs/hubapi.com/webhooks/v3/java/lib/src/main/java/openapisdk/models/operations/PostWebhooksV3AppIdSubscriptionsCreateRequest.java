package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksV3AppIdSubscriptionsCreateRequest {
    public PostWebhooksV3AppIdSubscriptionsCreatePathParams pathParams;
    public PostWebhooksV3AppIdSubscriptionsCreateRequest withPathParams(PostWebhooksV3AppIdSubscriptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionCreateRequest request;
    public PostWebhooksV3AppIdSubscriptionsCreateRequest withRequest(openapisdk.models.shared.SubscriptionCreateRequest request) {
        this.request = request;
        return this;
    }
    public PostWebhooksV3AppIdSubscriptionsCreateSecurity security;
    public PostWebhooksV3AppIdSubscriptionsCreateRequest withSecurity(PostWebhooksV3AppIdSubscriptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}