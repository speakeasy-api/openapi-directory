package openapisdk.models.operations;



public class DnsResponsePoliciesGetRequest {
    public DnsResponsePoliciesGetPathParams pathParams;
    public DnsResponsePoliciesGetRequest withPathParams(DnsResponsePoliciesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePoliciesGetQueryParams queryParams;
    public DnsResponsePoliciesGetRequest withQueryParams(DnsResponsePoliciesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResponsePoliciesGetSecurity security;
    public DnsResponsePoliciesGetRequest withSecurity(DnsResponsePoliciesGetSecurity security) {
        this.security = security;
        return this;
    }
}