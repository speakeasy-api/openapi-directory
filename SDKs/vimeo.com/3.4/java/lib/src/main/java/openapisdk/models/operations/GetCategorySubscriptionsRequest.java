package openapisdk.models.operations;



public class GetCategorySubscriptionsRequest {
    public GetCategorySubscriptionsPathParams pathParams;
    public GetCategorySubscriptionsRequest withPathParams(GetCategorySubscriptionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCategorySubscriptionsQueryParams queryParams;
    public GetCategorySubscriptionsRequest withQueryParams(GetCategorySubscriptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCategorySubscriptionsSecurity security;
    public GetCategorySubscriptionsRequest withSecurity(GetCategorySubscriptionsSecurity security) {
        this.security = security;
        return this;
    }
}