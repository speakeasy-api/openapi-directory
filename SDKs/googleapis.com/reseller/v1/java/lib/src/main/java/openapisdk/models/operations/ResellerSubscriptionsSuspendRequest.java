package openapisdk.models.operations;



public class ResellerSubscriptionsSuspendRequest {
    public ResellerSubscriptionsSuspendPathParams pathParams;
    public ResellerSubscriptionsSuspendRequest withPathParams(ResellerSubscriptionsSuspendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResellerSubscriptionsSuspendQueryParams queryParams;
    public ResellerSubscriptionsSuspendRequest withQueryParams(ResellerSubscriptionsSuspendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResellerSubscriptionsSuspendSecurity security;
    public ResellerSubscriptionsSuspendRequest withSecurity(ResellerSubscriptionsSuspendSecurity security) {
        this.security = security;
        return this;
    }
}