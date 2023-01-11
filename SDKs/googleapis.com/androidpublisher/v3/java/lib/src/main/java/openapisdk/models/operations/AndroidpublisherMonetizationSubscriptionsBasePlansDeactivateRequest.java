package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest {
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivatePathParams pathParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest withPathParams(AndroidpublisherMonetizationSubscriptionsBasePlansDeactivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateQueryParams queryParams;
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest withQueryParams(AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity security;
    public AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest withSecurity(AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity security) {
        this.security = security;
        return this;
    }
}