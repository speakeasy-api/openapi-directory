package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivatePathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity security) {
        this.security = security;
        return this;
    }
}