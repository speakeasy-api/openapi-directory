package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesUpdateRequest {
    public DnsResponsePoliciesUpdatePathParams pathParams;
    public DnsResponsePoliciesUpdateRequest withPathParams(DnsResponsePoliciesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePoliciesUpdateQueryParams queryParams;
    public DnsResponsePoliciesUpdateRequest withQueryParams(DnsResponsePoliciesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicy request;
    public DnsResponsePoliciesUpdateRequest withRequest(openapisdk.models.shared.ResponsePolicy request) {
        this.request = request;
        return this;
    }
    public DnsResponsePoliciesUpdateSecurity security;
    public DnsResponsePoliciesUpdateRequest withSecurity(DnsResponsePoliciesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}