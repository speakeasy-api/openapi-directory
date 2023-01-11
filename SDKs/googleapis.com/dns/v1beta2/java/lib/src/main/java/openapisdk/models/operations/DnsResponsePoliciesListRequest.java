package openapisdk.models.operations;



public class DnsResponsePoliciesListRequest {
    public DnsResponsePoliciesListPathParams pathParams;
    public DnsResponsePoliciesListRequest withPathParams(DnsResponsePoliciesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePoliciesListQueryParams queryParams;
    public DnsResponsePoliciesListRequest withQueryParams(DnsResponsePoliciesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResponsePoliciesListSecurity security;
    public DnsResponsePoliciesListRequest withSecurity(DnsResponsePoliciesListSecurity security) {
        this.security = security;
        return this;
    }
}