package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResponsePoliciesPatchRequest {
    public DnsResponsePoliciesPatchPathParams pathParams;
    public DnsResponsePoliciesPatchRequest withPathParams(DnsResponsePoliciesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResponsePoliciesPatchQueryParams queryParams;
    public DnsResponsePoliciesPatchRequest withQueryParams(DnsResponsePoliciesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResponsePolicy request;
    public DnsResponsePoliciesPatchRequest withRequest(openapisdk.models.shared.ResponsePolicy request) {
        this.request = request;
        return this;
    }
    public DnsResponsePoliciesPatchSecurity security;
    public DnsResponsePoliciesPatchRequest withSecurity(DnsResponsePoliciesPatchSecurity security) {
        this.security = security;
        return this;
    }
}