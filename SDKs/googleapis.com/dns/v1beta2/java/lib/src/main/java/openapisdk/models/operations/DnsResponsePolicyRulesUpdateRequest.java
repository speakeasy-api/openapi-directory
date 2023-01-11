package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePolicyRulesUpdateRequest {
    public DnsResponsePolicyRulesUpdatePathParams pathParams;
    public DnsResponsePolicyRulesUpdateRequest withPathParams(DnsResponsePolicyRulesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePolicyRulesUpdateQueryParams queryParams;
    public DnsResponsePolicyRulesUpdateRequest withQueryParams(DnsResponsePolicyRulesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicyRule request;
    public DnsResponsePolicyRulesUpdateRequest withRequest(openapisdk.models.shared.ResponsePolicyRule request) {
        this.request = request;
        return this;
    }
    public DnsResponsePolicyRulesUpdateSecurity security;
    public DnsResponsePolicyRulesUpdateRequest withSecurity(DnsResponsePolicyRulesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}