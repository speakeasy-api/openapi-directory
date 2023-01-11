package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesCreateRequest {
    public DnsResponsePolicyRulesCreatePathParams pathParams;
    public DnsResponsePolicyRulesCreateRequest withPathParams(DnsResponsePolicyRulesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePolicyRulesCreateQueryParams queryParams;
    public DnsResponsePolicyRulesCreateRequest withQueryParams(DnsResponsePolicyRulesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicyRule request;
    public DnsResponsePolicyRulesCreateRequest withRequest(openapisdk.models.shared.ResponsePolicyRule request) {
        this.request = request;
        return this;
    }
    public DnsResponsePolicyRulesCreateSecurity security;
    public DnsResponsePolicyRulesCreateRequest withSecurity(DnsResponsePolicyRulesCreateSecurity security) {
        this.security = security;
        return this;
    }
}