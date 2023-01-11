package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsCreateRequest {
    public AndroidpublisherMonetizationSubscriptionsCreatePathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsCreateRequest withPathParams(AndroidpublisherMonetizationSubscriptionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsCreateQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsCreateRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public AndroidpublisherMonetizationSubscriptionsCreateRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsCreateSecurity security;
    public AndroidpublisherMonetizationSubscriptionsCreateRequest withSecurity(AndroidpublisherMonetizationSubscriptionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}