package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsPoliciesPatchRequest {
    public DnsPoliciesPatchPathParams pathParams;
    public DnsPoliciesPatchRequest withPathParams(DnsPoliciesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsPoliciesPatchQueryParams queryParams;
    public DnsPoliciesPatchRequest withQueryParams(DnsPoliciesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Policy request;
    public DnsPoliciesPatchRequest withRequest(openapisdk.models.shared.Policy request) {
        this.request = request;
        return this;
    }
    public DnsPoliciesPatchSecurity security;
    public DnsPoliciesPatchRequest withSecurity(DnsPoliciesPatchSecurity security) {
        this.security = security;
        return this;
    }
}