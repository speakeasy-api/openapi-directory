package openapisdk.models.operations;



public class MirrorContactsGetRequest {
    public MirrorContactsGetPathParams pathParams;
    public MirrorContactsGetRequest withPathParams(MirrorContactsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorContactsGetQueryParams queryParams;
    public MirrorContactsGetRequest withQueryParams(MirrorContactsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorContactsGetSecurity security;
    public MirrorContactsGetRequest withSecurity(MirrorContactsGetSecurity security) {
        this.security = security;
        return this;
    }
}