package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest {
    public AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams pathParams;
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest withPathParams(AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams queryParams;
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest withQueryParams(AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionPurchasesAcknowledgeRequest request;
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest withRequest(openapisdk.models.shared.SubscriptionPurchasesAcknowledgeRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity security;
    public AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest withSecurity(AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}