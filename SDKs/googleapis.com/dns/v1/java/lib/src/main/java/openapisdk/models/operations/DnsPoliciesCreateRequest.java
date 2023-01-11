package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesCreateRequest {
    public DnsPoliciesCreatePathParams pathParams;
    public DnsPoliciesCreateRequest withPathParams(DnsPoliciesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsPoliciesCreateQueryParams queryParams;
    public DnsPoliciesCreateRequest withQueryParams(DnsPoliciesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Policy request;
    public DnsPoliciesCreateRequest withRequest(openapisdk.models.shared.Policy request) {
        this.request = request;
        return this;
    }
    public DnsPoliciesCreateSecurity security;
    public DnsPoliciesCreateRequest withSecurity(DnsPoliciesCreateSecurity security) {
        this.security = security;
        return this;
    }
}