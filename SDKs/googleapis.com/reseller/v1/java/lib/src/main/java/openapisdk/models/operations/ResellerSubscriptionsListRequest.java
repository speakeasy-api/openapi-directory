package openapisdk.models.operations;



public class ResellerSubscriptionsListRequest {
    public ResellerSubscriptionsListQueryParams queryParams;
    public ResellerSubscriptionsListRequest withQueryParams(ResellerSubscriptionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResellerSubscriptionsListSecurity security;
    public ResellerSubscriptionsListRequest withSecurity(ResellerSubscriptionsListSecurity security) {
        this.security = security;
        return this;
    }
}