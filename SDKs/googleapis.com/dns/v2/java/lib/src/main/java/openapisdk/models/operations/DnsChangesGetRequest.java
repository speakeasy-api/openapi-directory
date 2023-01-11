package openapisdk.models.operations;



public class DnsChangesGetRequest {
    public DnsChangesGetPathParams pathParams;
    public DnsChangesGetRequest withPathParams(DnsChangesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsChangesGetQueryParams queryParams;
    public DnsChangesGetRequest withQueryParams(DnsChangesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsChangesGetSecurity security;
    public DnsChangesGetRequest withSecurity(DnsChangesGetSecurity security) {
        this.security = security;
        return this;
    }
}