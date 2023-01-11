package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsPatchRequest {
    public AndroidpublisherMonetizationSubscriptionsPatchPathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsPatchRequest withPathParams(AndroidpublisherMonetizationSubscriptionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsPatchQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsPatchRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public AndroidpublisherMonetizationSubscriptionsPatchRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsPatchSecurity security;
    public AndroidpublisherMonetizationSubscriptionsPatchRequest withSecurity(AndroidpublisherMonetizationSubscriptionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}