package openapisdk.models.operations;



public class MirrorContactsDeleteRequest {
    public MirrorContactsDeletePathParams pathParams;
    public MirrorContactsDeleteRequest withPathParams(MirrorContactsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorContactsDeleteQueryParams queryParams;
    public MirrorContactsDeleteRequest withQueryParams(MirrorContactsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorContactsDeleteSecurity security;
    public MirrorContactsDeleteRequest withSecurity(MirrorContactsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}