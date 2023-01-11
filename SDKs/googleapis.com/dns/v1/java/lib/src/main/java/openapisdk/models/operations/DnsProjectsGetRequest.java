package openapisdk.models.operations;



public class DnsProjectsGetRequest {
    public DnsProjectsGetPathParams pathParams;
    public DnsProjectsGetRequest withPathParams(DnsProjectsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsProjectsGetQueryParams queryParams;
    public DnsProjectsGetRequest withQueryParams(DnsProjectsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsProjectsGetSecurity security;
    public DnsProjectsGetRequest withSecurity(DnsProjectsGetSecurity security) {
        this.security = security;
        return this;
    }
}