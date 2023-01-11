package openapisdk.models.operations;



public class MirrorContactsListRequest {
    public MirrorContactsListQueryParams queryParams;
    public MirrorContactsListRequest withQueryParams(MirrorContactsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MirrorContactsListSecurity security;
    public MirrorContactsListRequest withSecurity(MirrorContactsListSecurity security) {
        this.security = security;
        return this;
    }
}