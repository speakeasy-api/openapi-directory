package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesCreateRequest {
    public DnsResponsePoliciesCreatePathParams pathParams;
    public DnsResponsePoliciesCreateRequest withPathParams(DnsResponsePoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePoliciesCreateQueryParams queryParams;
    public DnsResponsePoliciesCreateRequest withQueryParams(DnsResponsePoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicy request;
    public DnsResponsePoliciesCreateRequest withRequest(openapisdk.models.shared.ResponsePolicy request) {
        this.request = request;
        return this;
    }
    public DnsResponsePoliciesCreateSecurity security;
    public DnsResponsePoliciesCreateRequest withSecurity(DnsResponsePoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}