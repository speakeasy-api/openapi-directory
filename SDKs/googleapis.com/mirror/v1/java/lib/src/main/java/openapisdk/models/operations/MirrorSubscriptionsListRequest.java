package openapisdk.models.operations;



public class MirrorSubscriptionsListRequest {
    public MirrorSubscriptionsListQueryParams queryParams;
    public MirrorSubscriptionsListRequest withQueryParams(MirrorSubscriptionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorSubscriptionsListSecurity security;
    public MirrorSubscriptionsListRequest withSecurity(MirrorSubscriptionsListSecurity security) {
        this.security = security;
        return this;
    }
}