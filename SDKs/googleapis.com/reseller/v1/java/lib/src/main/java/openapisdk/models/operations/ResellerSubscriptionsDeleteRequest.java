package openapisdk.models.operations;



public class ResellerSubscriptionsDeleteRequest {
    public ResellerSubscriptionsDeletePathParams pathParams;
    public ResellerSubscriptionsDeleteRequest withPathParams(ResellerSubscriptionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsDeleteQueryParams queryParams;
    public ResellerSubscriptionsDeleteRequest withQueryParams(ResellerSubscriptionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResellerSubscriptionsDeleteSecurity security;
    public ResellerSubscriptionsDeleteRequest withSecurity(ResellerSubscriptionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}