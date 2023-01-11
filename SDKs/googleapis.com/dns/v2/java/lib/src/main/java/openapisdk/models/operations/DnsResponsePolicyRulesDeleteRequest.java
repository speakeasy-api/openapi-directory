package openapisdk.models.operations;



public class DnsResponsePolicyRulesDeleteRequest {
    public DnsResponsePolicyRulesDeletePathParams pathParams;
    public DnsResponsePolicyRulesDeleteRequest withPathParams(DnsResponsePolicyRulesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePolicyRulesDeleteQueryParams queryParams;
    public DnsResponsePolicyRulesDeleteRequest withQueryParams(DnsResponsePolicyRulesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResponsePolicyRulesDeleteSecurity security;
    public DnsResponsePolicyRulesDeleteRequest withSecurity(DnsResponsePolicyRulesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}