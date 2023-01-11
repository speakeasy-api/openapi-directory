package openapisdk.models.operations;



public class DnsDnsKeysGetRequest {
    public DnsDnsKeysGetPathParams pathParams;
    public DnsDnsKeysGetRequest withPathParams(DnsDnsKeysGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsDnsKeysGetQueryParams queryParams;
    public DnsDnsKeysGetRequest withQueryParams(DnsDnsKeysGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsDnsKeysGetSecurity security;
    public DnsDnsKeysGetRequest withSecurity(DnsDnsKeysGetSecurity security) {
        this.security = security;
        return this;
    }
}