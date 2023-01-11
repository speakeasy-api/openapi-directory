package openapisdk.models.operations;



public class MirrorSubscriptionsDeleteRequest {
    public MirrorSubscriptionsDeletePathParams pathParams;
    public MirrorSubscriptionsDeleteRequest withPathParams(MirrorSubscriptionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorSubscriptionsDeleteQueryParams queryParams;
    public MirrorSubscriptionsDeleteRequest withQueryParams(MirrorSubscriptionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorSubscriptionsDeleteSecurity security;
    public MirrorSubscriptionsDeleteRequest withSecurity(MirrorSubscriptionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}