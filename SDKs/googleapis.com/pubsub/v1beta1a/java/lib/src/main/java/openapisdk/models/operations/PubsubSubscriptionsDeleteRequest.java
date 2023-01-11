package openapisdk.models.operations;



public class PubsubSubscriptionsDeleteRequest {
    public PubsubSubscriptionsDeletePathParams pathParams;
    public PubsubSubscriptionsDeleteRequest withPathParams(PubsubSubscriptionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PubsubSubscriptionsDeleteQueryParams queryParams;
    public PubsubSubscriptionsDeleteRequest withQueryParams(PubsubSubscriptionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubSubscriptionsDeleteSecurity security;
    public PubsubSubscriptionsDeleteRequest withSecurity(PubsubSubscriptionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}