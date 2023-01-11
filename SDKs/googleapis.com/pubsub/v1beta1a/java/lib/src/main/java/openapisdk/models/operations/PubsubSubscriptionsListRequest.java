package openapisdk.models.operations;



public class PubsubSubscriptionsListRequest {
    public PubsubSubscriptionsListQueryParams queryParams;
    public PubsubSubscriptionsListRequest withQueryParams(PubsubSubscriptionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PubsubSubscriptionsListSecurity security;
    public PubsubSubscriptionsListRequest withSecurity(PubsubSubscriptionsListSecurity security) {
        this.security = security;
        return this;
    }
}