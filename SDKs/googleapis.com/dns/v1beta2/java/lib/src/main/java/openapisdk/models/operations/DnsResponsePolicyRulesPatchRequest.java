package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesPatchRequest {
    public DnsResponsePolicyRulesPatchPathParams pathParams;
    public DnsResponsePolicyRulesPatchRequest withPathParams(DnsResponsePolicyRulesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePolicyRulesPatchQueryParams queryParams;
    public DnsResponsePolicyRulesPatchRequest withQueryParams(DnsResponsePolicyRulesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicyRule request;
    public DnsResponsePolicyRulesPatchRequest withRequest(openapisdk.models.shared.ResponsePolicyRule request) {
        this.request = request;
        return this;
    }
    public DnsResponsePolicyRulesPatchSecurity security;
    public DnsResponsePolicyRulesPatchRequest withSecurity(DnsResponsePolicyRulesPatchSecurity security) {
        this.security = security;
        return this;
    }
}