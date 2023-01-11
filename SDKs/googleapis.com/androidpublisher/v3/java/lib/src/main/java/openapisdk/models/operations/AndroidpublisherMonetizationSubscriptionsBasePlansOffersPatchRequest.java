package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionOfferInput request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest withRequest(openapisdk.models.shared.SubscriptionOfferInput request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity security) {
        this.security = security;
        return this;
    }
}