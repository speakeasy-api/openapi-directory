package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherPurchasesProductsAcknowledgeRequest {
    public AndroidpublisherPurchasesProductsAcknowledgePathParams pathParams;
    public AndroidpublisherPurchasesProductsAcknowledgeRequest withPathParams(AndroidpublisherPurchasesProductsAcknowledgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroidpublisherPurchasesProductsAcknowledgeQueryParams queryParams;
    public AndroidpublisherPurchasesProductsAcknowledgeRequest withQueryParams(AndroidpublisherPurchasesProductsAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductPurchasesAcknowledgeRequest request;
    public AndroidpublisherPurchasesProductsAcknowledgeRequest withRequest(openapisdk.models.shared.ProductPurchasesAcknowledgeRequest request) {
        this.request = request;
        return this;
    }
    public AndroidpublisherPurchasesProductsAcknowledgeSecurity security;
    public AndroidpublisherPurchasesProductsAcknowledgeRequest withSecurity(AndroidpublisherPurchasesProductsAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}