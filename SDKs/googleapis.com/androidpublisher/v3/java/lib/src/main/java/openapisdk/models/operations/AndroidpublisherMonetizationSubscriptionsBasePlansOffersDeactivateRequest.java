package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity security) {
        this.security = security;
        return this;
    }
}