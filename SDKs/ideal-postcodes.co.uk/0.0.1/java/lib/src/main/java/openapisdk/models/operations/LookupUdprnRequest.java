package openapisdk.models.operations;



public class LookupUdprnRequest {
    public LookupUdprnPathParams pathParams;
    public LookupUdprnRequest withPathParams(LookupUdprnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LookupUdprnQueryParams queryParams;
    public LookupUdprnRequest withQueryParams(LookupUdprnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LookupUdprnSecurity security;
    public LookupUdprnRequest withSecurity(LookupUdprnSecurity security) {
        this.security = security;
        return this;
    }
}