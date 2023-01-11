package openapisdk.models.operations;



public class PubsubSubscriptionsGetRequest {
    public PubsubSubscriptionsGetPathParams pathParams;
    public PubsubSubscriptionsGetRequest withPathParams(PubsubSubscriptionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PubsubSubscriptionsGetQueryParams queryParams;
    public PubsubSubscriptionsGetRequest withQueryParams(PubsubSubscriptionsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubSubscriptionsGetSecurity security;
    public PubsubSubscriptionsGetRequest withSecurity(PubsubSubscriptionsGetSecurity security) {
        this.security = security;
        return this;
    }
}