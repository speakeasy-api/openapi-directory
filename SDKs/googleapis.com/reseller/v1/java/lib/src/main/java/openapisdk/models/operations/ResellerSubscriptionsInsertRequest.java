package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsInsertRequest {
    public ResellerSubscriptionsInsertPathParams pathParams;
    public ResellerSubscriptionsInsertRequest withPathParams(ResellerSubscriptionsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsInsertQueryParams queryParams;
    public ResellerSubscriptionsInsertRequest withQueryParams(ResellerSubscriptionsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Subscription request;
    public ResellerSubscriptionsInsertRequest withRequest(openapisdk.models.shared.Subscription request) {
        this.request = request;
        return this;
    }
    public ResellerSubscriptionsInsertSecurity security;
    public ResellerSubscriptionsInsertRequest withSecurity(ResellerSubscriptionsInsertSecurity security) {
        this.security = security;
        return this;
    }
}