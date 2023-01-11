package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsDeferRequest {
    public AndroidpublisherPurchasesSubscriptionsDeferPathParams pathParams;
    public AndroidpublisherPurchasesSubscriptionsDeferRequest withPathParams(AndroidpublisherPurchasesSubscriptionsDeferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherPurchasesSubscriptionsDeferQueryParams queryParams;
    public AndroidpublisherPurchasesSubscriptionsDeferRequest withQueryParams(AndroidpublisherPurchasesSubscriptionsDeferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionPurchasesDeferRequest request;
    public AndroidpublisherPurchasesSubscriptionsDeferRequest withRequest(openapisdk.models.shared.SubscriptionPurchasesDeferRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherPurchasesSubscriptionsDeferSecurity security;
    public AndroidpublisherPurchasesSubscriptionsDeferRequest withSecurity(AndroidpublisherPurchasesSubscriptionsDeferSecurity security) {
        this.security = security;
        return this;
    }
}