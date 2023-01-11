package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesUpdateRequest {
    public DnsPoliciesUpdatePathParams pathParams;
    public DnsPoliciesUpdateRequest withPathParams(DnsPoliciesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsPoliciesUpdateQueryParams queryParams;
    public DnsPoliciesUpdateRequest withQueryParams(DnsPoliciesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Policy request;
    public DnsPoliciesUpdateRequest withRequest(openapisdk.models.shared.Policy request) {
        this.request = request;
        return this;
    }
    public DnsPoliciesUpdateSecurity security;
    public DnsPoliciesUpdateRequest withSecurity(DnsPoliciesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}