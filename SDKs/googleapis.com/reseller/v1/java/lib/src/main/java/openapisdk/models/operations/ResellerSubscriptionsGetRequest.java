package openapisdk.models.operations;



public class ResellerSubscriptionsGetRequest {
    public ResellerSubscriptionsGetPathParams pathParams;
    public ResellerSubscriptionsGetRequest withPathParams(ResellerSubscriptionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsGetQueryParams queryParams;
    public ResellerSubscriptionsGetRequest withQueryParams(ResellerSubscriptionsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResellerSubscriptionsGetSecurity security;
    public ResellerSubscriptionsGetRequest withSecurity(ResellerSubscriptionsGetSecurity security) {
        this.security = security;
        return this;
    }
}