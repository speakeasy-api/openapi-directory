package openapisdk.models.operations;



public class DnsDnsKeysListRequest {
    public DnsDnsKeysListPathParams pathParams;
    public DnsDnsKeysListRequest withPathParams(DnsDnsKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsDnsKeysListQueryParams queryParams;
    public DnsDnsKeysListRequest withQueryParams(DnsDnsKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsDnsKeysListSecurity security;
    public DnsDnsKeysListRequest withSecurity(DnsDnsKeysListSecurity security) {
        this.security = security;
        return this;
    }
}