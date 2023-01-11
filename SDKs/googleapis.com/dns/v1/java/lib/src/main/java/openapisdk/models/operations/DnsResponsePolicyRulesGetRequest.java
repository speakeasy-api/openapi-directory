package openapisdk.models.operations;



public class DnsResponsePolicyRulesGetRequest {
    public DnsResponsePolicyRulesGetPathParams pathParams;
    public DnsResponsePolicyRulesGetRequest withPathParams(DnsResponsePolicyRulesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePolicyRulesGetQueryParams queryParams;
    public DnsResponsePolicyRulesGetRequest withQueryParams(DnsResponsePolicyRulesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResponsePolicyRulesGetSecurity security;
    public DnsResponsePolicyRulesGetRequest withSecurity(DnsResponsePolicyRulesGetSecurity security) {
        this.security = security;
        return this;
    }
}