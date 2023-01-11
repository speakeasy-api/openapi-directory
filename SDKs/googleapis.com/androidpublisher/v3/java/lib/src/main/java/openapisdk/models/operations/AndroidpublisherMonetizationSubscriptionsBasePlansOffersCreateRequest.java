package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionOfferInput request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest withRequest(openapisdk.models.shared.SubscriptionOfferInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity security) {
        this.security = security;
        return this;
    }
}